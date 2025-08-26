from fastapi import FastAPI, APIRouter, HTTPException, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactSubmission(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    subject: str
    message: str
    submitted_at: datetime = Field(default_factory=datetime.utcnow)
    status: str = Field(default="new")
    ip_address: Optional[str] = None

class ContactSubmissionCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    subject: str = Field(..., min_length=1, max_length=200)
    message: str = Field(..., min_length=10, max_length=2000)

class ContactResponse(BaseModel):
    success: bool
    message: str
    id: Optional[str] = None

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact_form(
    contact_data: ContactSubmissionCreate,
    request: Request = None
):
    try:
        # Create contact submission object
        contact_dict = contact_data.dict()
        contact_obj = ContactSubmission(**contact_dict)
        
        # Add IP address if available
        if request:
            contact_obj.ip_address = getattr(request.client, 'host', None)
        
        # Save to database
        result = await db.contact_submissions.insert_one(contact_obj.dict())
        
        if result.inserted_id:
            return ContactResponse(
                success=True,
                message="Thank you for your message! I will get back to you soon.",
                id=contact_obj.id
            )
        else:
            raise HTTPException(status_code=500, detail="Failed to save contact submission")
            
    except Exception as e:
        logger.error(f"Error saving contact submission: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/contact", response_model=List[ContactSubmission])
async def get_contact_submissions():
    """Admin endpoint to retrieve contact submissions"""
    try:
        submissions = await db.contact_submissions.find().sort("submitted_at", -1).to_list(100)
        return [ContactSubmission(**submission) for submission in submissions]
    except Exception as e:
        logger.error(f"Error retrieving contact submissions: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
