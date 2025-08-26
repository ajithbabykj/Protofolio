#!/usr/bin/env python3
"""
Backend API Testing for Ajith Baby's Portfolio Contact Form
Tests the contact form endpoints: POST /api/contact and GET /api/contact
"""

import requests
import json
import time
from datetime import datetime
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/app/frontend/.env')

# Get the backend URL from environment
BACKEND_URL = os.getenv('REACT_APP_BACKEND_URL', 'https://tech-innovator-15.preview.emergentagent.com')
API_BASE_URL = f"{BACKEND_URL}/api"

class ContactFormTester:
    def __init__(self):
        self.base_url = API_BASE_URL
        self.test_results = []
        self.session = requests.Session()
        
    def log_test(self, test_name, success, message, details=None):
        """Log test results"""
        result = {
            'test': test_name,
            'success': success,
            'message': message,
            'timestamp': datetime.now().isoformat(),
            'details': details
        }
        self.test_results.append(result)
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status}: {test_name} - {message}")
        if details:
            print(f"   Details: {details}")
    
    def test_valid_contact_submission(self):
        """Test successful contact form submission with valid data"""
        test_data = {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "subject": "Portfolio Inquiry",
            "message": "Hello Ajith, I'm interested in discussing a potential project collaboration. Your portfolio looks impressive!"
        }
        
        try:
            response = self.session.post(f"{self.base_url}/contact", json=test_data)
            
            if response.status_code == 200:
                data = response.json()
                if data.get('success') and data.get('id'):
                    self.log_test(
                        "Valid Contact Submission",
                        True,
                        "Contact form submitted successfully",
                        f"Response: {data}"
                    )
                    return data.get('id')  # Return ID for later verification
                else:
                    self.log_test(
                        "Valid Contact Submission",
                        False,
                        "Response format incorrect",
                        f"Response: {data}"
                    )
            else:
                self.log_test(
                    "Valid Contact Submission",
                    False,
                    f"HTTP {response.status_code}",
                    f"Response: {response.text}"
                )
        except Exception as e:
            self.log_test(
                "Valid Contact Submission",
                False,
                f"Request failed: {str(e)}"
            )
        return None
    
    def test_missing_required_fields(self):
        """Test form validation with missing required fields"""
        test_cases = [
            {"email": "test@example.com", "subject": "Test", "message": "Test message with enough characters"},
            {"name": "Test User", "subject": "Test", "message": "Test message with enough characters"},
            {"name": "Test User", "email": "test@example.com", "message": "Test message with enough characters"},
            {"name": "Test User", "email": "test@example.com", "subject": "Test"}
        ]
        
        field_names = ["name", "email", "subject", "message"]
        
        for i, test_data in enumerate(test_cases):
            missing_field = field_names[i]
            try:
                response = self.session.post(f"{self.base_url}/contact", json=test_data)
                
                if response.status_code == 422:  # Validation error expected
                    self.log_test(
                        f"Missing {missing_field} Field Validation",
                        True,
                        "Validation error returned as expected",
                        f"Status: {response.status_code}"
                    )
                else:
                    self.log_test(
                        f"Missing {missing_field} Field Validation",
                        False,
                        f"Expected 422, got {response.status_code}",
                        f"Response: {response.text}"
                    )
            except Exception as e:
                self.log_test(
                    f"Missing {missing_field} Field Validation",
                    False,
                    f"Request failed: {str(e)}"
                )
    
    def test_invalid_email_formats(self):
        """Test email validation with invalid email formats"""
        invalid_emails = [
            "invalid-email",
            "test@",
            "@example.com",
            "test..test@example.com",
            "test@example",
            ""
        ]
        
        for email in invalid_emails:
            test_data = {
                "name": "Test User",
                "email": email,
                "subject": "Test Subject",
                "message": "This is a test message with more than 10 characters"
            }
            
            try:
                response = self.session.post(f"{self.base_url}/contact", json=test_data)
                
                if response.status_code == 422:  # Validation error expected
                    self.log_test(
                        f"Invalid Email Validation ({email})",
                        True,
                        "Email validation error returned as expected",
                        f"Status: {response.status_code}"
                    )
                else:
                    self.log_test(
                        f"Invalid Email Validation ({email})",
                        False,
                        f"Expected 422, got {response.status_code}",
                        f"Response: {response.text}"
                    )
            except Exception as e:
                self.log_test(
                    f"Invalid Email Validation ({email})",
                    False,
                    f"Request failed: {str(e)}"
                )
    
    def test_field_length_validation(self):
        """Test field length validation constraints"""
        test_cases = [
            {
                "name": "Test Name Length Validation",
                "data": {
                    "name": "",  # Too short (min_length=1)
                    "email": "test@example.com",
                    "subject": "Test Subject",
                    "message": "This is a test message with more than 10 characters"
                },
                "expected_error": "name too short"
            },
            {
                "name": "Test Name Max Length Validation",
                "data": {
                    "name": "A" * 101,  # Too long (max_length=100)
                    "email": "test@example.com",
                    "subject": "Test Subject",
                    "message": "This is a test message with more than 10 characters"
                },
                "expected_error": "name too long"
            },
            {
                "name": "Test Subject Length Validation",
                "data": {
                    "name": "Test User",
                    "email": "test@example.com",
                    "subject": "",  # Too short (min_length=1)
                    "message": "This is a test message with more than 10 characters"
                },
                "expected_error": "subject too short"
            },
            {
                "name": "Test Subject Max Length Validation",
                "data": {
                    "name": "Test User",
                    "email": "test@example.com",
                    "subject": "A" * 201,  # Too long (max_length=200)
                    "message": "This is a test message with more than 10 characters"
                },
                "expected_error": "subject too long"
            },
            {
                "name": "Test Message Min Length Validation",
                "data": {
                    "name": "Test User",
                    "email": "test@example.com",
                    "subject": "Test Subject",
                    "message": "Short"  # Too short (min_length=10)
                },
                "expected_error": "message too short"
            },
            {
                "name": "Test Message Max Length Validation",
                "data": {
                    "name": "Test User",
                    "email": "test@example.com",
                    "subject": "Test Subject",
                    "message": "A" * 2001  # Too long (max_length=2000)
                },
                "expected_error": "message too long"
            }
        ]
        
        for test_case in test_cases:
            try:
                response = self.session.post(f"{self.base_url}/contact", json=test_case["data"])
                
                if response.status_code == 422:  # Validation error expected
                    self.log_test(
                        test_case["name"],
                        True,
                        "Field length validation error returned as expected",
                        f"Status: {response.status_code}"
                    )
                else:
                    self.log_test(
                        test_case["name"],
                        False,
                        f"Expected 422, got {response.status_code}",
                        f"Response: {response.text}"
                    )
            except Exception as e:
                self.log_test(
                    test_case["name"],
                    False,
                    f"Request failed: {str(e)}"
                )
    
    def test_get_contact_submissions(self):
        """Test retrieval of contact submissions"""
        try:
            response = self.session.get(f"{self.base_url}/contact")
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test(
                        "Get Contact Submissions",
                        True,
                        f"Retrieved {len(data)} contact submissions",
                        f"Response format: list with {len(data)} items"
                    )
                    
                    # Check if submissions are sorted by submitted_at in descending order
                    if len(data) > 1:
                        dates = [item.get('submitted_at') for item in data if item.get('submitted_at')]
                        if dates == sorted(dates, reverse=True):
                            self.log_test(
                                "Contact Submissions Sorting",
                                True,
                                "Submissions are correctly sorted by submitted_at (descending)"
                            )
                        else:
                            self.log_test(
                                "Contact Submissions Sorting",
                                False,
                                "Submissions are not properly sorted by submitted_at"
                            )
                    
                    return data
                else:
                    self.log_test(
                        "Get Contact Submissions",
                        False,
                        "Response is not a list",
                        f"Response: {data}"
                    )
            else:
                self.log_test(
                    "Get Contact Submissions",
                    False,
                    f"HTTP {response.status_code}",
                    f"Response: {response.text}"
                )
        except Exception as e:
            self.log_test(
                "Get Contact Submissions",
                False,
                f"Request failed: {str(e)}"
            )
        return None
    
    def test_data_model_fields(self, submission_id=None):
        """Test that ContactSubmission model fields are correctly saved"""
        if not submission_id:
            # Create a test submission first
            submission_id = self.test_valid_contact_submission()
        
        if submission_id:
            # Retrieve submissions and verify the data model
            submissions = self.test_get_contact_submissions()
            if submissions:
                # Find our test submission
                test_submission = None
                for submission in submissions:
                    if submission.get('id') == submission_id:
                        test_submission = submission
                        break
                
                if test_submission:
                    required_fields = ['id', 'name', 'email', 'subject', 'message', 'submitted_at', 'status']
                    missing_fields = []
                    
                    for field in required_fields:
                        if field not in test_submission:
                            missing_fields.append(field)
                    
                    if not missing_fields:
                        # Check auto-generated fields
                        auto_fields_valid = True
                        issues = []
                        
                        if not test_submission.get('id'):
                            issues.append("ID field is empty")
                            auto_fields_valid = False
                        
                        if not test_submission.get('submitted_at'):
                            issues.append("submitted_at field is empty")
                            auto_fields_valid = False
                        
                        if test_submission.get('status') != 'new':
                            issues.append(f"status field should be 'new', got '{test_submission.get('status')}'")
                            auto_fields_valid = False
                        
                        if auto_fields_valid:
                            self.log_test(
                                "Data Model Fields Validation",
                                True,
                                "All required fields present and auto-generated fields working correctly",
                                f"Submission: {test_submission}"
                            )
                        else:
                            self.log_test(
                                "Data Model Fields Validation",
                                False,
                                "Auto-generated fields have issues",
                                f"Issues: {issues}"
                            )
                    else:
                        self.log_test(
                            "Data Model Fields Validation",
                            False,
                            f"Missing required fields: {missing_fields}",
                            f"Submission: {test_submission}"
                        )
                else:
                    self.log_test(
                        "Data Model Fields Validation",
                        False,
                        f"Could not find test submission with ID: {submission_id}"
                    )
    
    def test_server_connectivity(self):
        """Test basic server connectivity"""
        try:
            response = self.session.get(f"{self.base_url}/")
            if response.status_code == 200:
                self.log_test(
                    "Server Connectivity",
                    True,
                    "Backend server is accessible",
                    f"Response: {response.json()}"
                )
                return True
            else:
                self.log_test(
                    "Server Connectivity",
                    False,
                    f"Server returned HTTP {response.status_code}",
                    f"Response: {response.text}"
                )
        except Exception as e:
            self.log_test(
                "Server Connectivity",
                False,
                f"Cannot connect to server: {str(e)}"
            )
        return False
    
    def run_all_tests(self):
        """Run all contact form tests"""
        print(f"\n🚀 Starting Contact Form Backend API Tests")
        print(f"📍 Testing API at: {self.base_url}")
        print("=" * 60)
        
        # Test server connectivity first
        if not self.test_server_connectivity():
            print("\n❌ Cannot connect to server. Aborting tests.")
            return
        
        # Test valid submission and get ID for later verification
        submission_id = self.test_valid_contact_submission()
        
        # Test validation errors
        self.test_missing_required_fields()
        self.test_invalid_email_formats()
        self.test_field_length_validation()
        
        # Test GET endpoint
        self.test_get_contact_submissions()
        
        # Test data model
        self.test_data_model_fields(submission_id)
        
        # Print summary
        print("\n" + "=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        
        passed = sum(1 for result in self.test_results if result['success'])
        total = len(self.test_results)
        
        print(f"✅ Passed: {passed}")
        print(f"❌ Failed: {total - passed}")
        print(f"📈 Success Rate: {(passed/total)*100:.1f}%")
        
        if total - passed > 0:
            print("\n🔍 FAILED TESTS:")
            for result in self.test_results:
                if not result['success']:
                    print(f"   • {result['test']}: {result['message']}")
        
        return self.test_results

if __name__ == "__main__":
    tester = ContactFormTester()
    results = tester.run_all_tests()