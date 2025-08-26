# Backend API Contracts - Ajith Baby Portfolio

## Current Frontend Mock Data
- Contact form submission currently shows alert message
- No actual data persistence or email functionality

## Backend Implementation Plan

### 1. Contact Form API
**Endpoint**: `POST /api/contact`
**Purpose**: Handle contact form submissions from portfolio visitors

**Request Body**:
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "subject": "string (required)",
  "message": "string (required)"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Thank you for your message! I will get back to you soon.",
  "id": "contact_submission_id"
}
```

**Error Response**:
```json
{
  "success": false,
  "message": "Error description",
  "errors": ["validation errors if any"]
}
```

### 2. Database Schema

**Collection**: `contact_submissions`
```json
{
  "_id": "ObjectId",
  "name": "string",
  "email": "string", 
  "subject": "string",
  "message": "string",
  "submitted_at": "datetime",
  "ip_address": "string (optional)",
  "status": "new|read|replied"
}
```

### 3. Portfolio Analytics API (Optional Enhancement)
**Endpoint**: `GET /api/analytics/visits`
**Purpose**: Track portfolio visits for insights

### 4. Frontend Integration Changes
**File**: `/app/frontend/src/components/Contact.jsx`
- Replace mock form submission with actual API call
- Add proper error handling and loading states
- Show success/error messages based on API response
- Add form validation before submission

### 5. Environment Variables Needed
- SMTP configuration for email notifications (optional)
- Rate limiting configuration
- CORS settings for production

### 6. API Security Features
- Input validation and sanitization
- Rate limiting to prevent spam
- CORS configuration
- Basic SQL injection prevention (MongoDB)

## Integration Steps
1. ✅ Create backend contact submission endpoint
2. ✅ Add MongoDB model for contact submissions
3. ✅ Implement form validation
4. ✅ Update frontend Contact.jsx to use API
5. ✅ Add error handling and loading states
6. ✅ Test form submission flow

## Testing Requirements
- Test valid form submissions
- Test form validation errors
- Test network error handling
- Test success/failure UI states