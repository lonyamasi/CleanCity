#  CleanCity – High Risk Test Cases

 Test Case Format  

Each test case will include:  
- **Test Case ID & Title**  
- **Objective**   
- **Test Steps**  
- **Expected Result**  
- **Actual Result**  
- **Status (Pass/Fail)**  
- **Severity/Priority (if failed)**  

---


## TC1: Authentication and Access control
### TCS-1.1: User Registration
**Objective** :Validate input fields (email, password, full name, phone)

### TCS-1.1.1: Invalid email characters
**Objective** : Only valid emails are accepted

**Steps to reproduce**:
- Click the register button
- Enter full name
- Enter email address as - earl#!@gmail.com
- Create password, confirm password 
- Click create account.

Expected vs Actual
|Expected                       | Actual                        |
|-------------------------------|-------------------------------|
|Error pops up, email is invalid|Creates account with this email|

**Status (Pass/Fail)**: Fail  
**Severity/Priority (if failed)** : Major


### TCS-1.1.2: Valid Password should be atleast 8 characters
**Objective**: Password only accepts atleast 8 characters

**Steps to Reproduce**:

Click Register on Nav bar
Full Name: Sayari Leo
Email: sayari@gmail.com
password (Enter a password with 7 or less characters eg): say123
Confirm Password: say123


**Expected:**

 Error pops up,password must be 8 characters long

**Actual:**

Pop up- Password must be 3 characters.  User is able to proceed with registration,

**Status (Pass/Fail)**: Fail  
**Severity/Priority (if failed)** : Critical



### TCS-1.1.3: One Email registers one user.

**Objective-3**: Ensure one email(regardless of case) registers one user.

**Steps to Reproduce**:

Click register button
Enter full name - Clara
Enter email - clara@gmail.com
Enter password -
Register
Repeat process now with email as - Clara@gmail.com

**Expected**

- error; email is already registered

**Actual**
- creates two  different users

**Status (Pass/Fail)**: Fail  
**Severity/Priority (if failed)** : Major


### TCS-1.2: User Log in and Log out process

**Objective-1**: User Login and Log out process of system works

**Steps to reproduce**:

- Click the register button
- Enter full name- Clara Sayari
- Enter email address as - clara@gmail.com
- Create password, confirm password 
- Click create account.
- Click Log in
- Enter email address- clara@gmail.com
- Enter password used to register
- Click Log in
- Refresh the page
- click log out


|Expected                                                           | Actual                        |
|-------------------------------------------------------------------|-------------------------------|
|User, Clara Sayari is should be able to login                      | User, Clara Sayari  logs in   |
|On refresh, user Clara Sayari is still in session                  | User is still in session      |
|clicking log out allows users to log out and clear session data    | User session is logged out    |

**Status (Pass/Fail)**: Pass



### TC-1.3: Admin Function Access Restriction

**Objective:** Ensure that only users with the "Admin" role can access and perform admin-specific functions in the system

**Steps to Reproduce:**

- Log in as Regular User
- Email: user@cleancity.com
- Password: password123
- Attempt to access admin dashboard or functions (e.g., change pickup request status)
- Log out


- Log in as adminUser (role: Admin)
- Email: admin@cleancity.com
- Password: admin123
- Access admin dashboard and perform admin functions

**Expected Behavior:**

- User dashboard available for the user. No admin functionalities.
- Admin  can fully access and utilize admin dashboard and functionalities

**Actual Behavior:**

- User dashboard available for the user. No admin functionalities.
- Admin  can fully access and utilize admin dashboard and functionalities

**Status** (Pass/Fail): Pass






## TC2: Waste Management Testing
### TCS-2: Main Operations around waste pickup and handling

### TC-2.1**Validate date must be at least 24h in future
**Objective:** Ensure that system only allows dates atleast 24h in the future

**Steps to Reproduce**:

- Go to the Home tab of the CleanCity website.
- Fill in the pickup request form with name(Jay), location(Eldoret), and waste type(Recyclable).
- For Preferred Pickup Date, choose a date in the past (2024-01-06).
- Submit the form.



**Expected Behavior**:

- Form should reject past dates with an error message
- Date input should restrict selection to today and the future

**Actual Behavior**

- Form accepts and stores past dates like 2024-01-6
- No restrictions on date picker or validation logic

**Status (Pass/Fail)**: Fail  
**Severity/Priority (if failed)** : Critical




### TC-2.2**Duplicate Pickup Requests for Same User, Date, and Location
**Objective**: Test that the system does not allow a user to submit multiple pickup requests for the same location and date, ensuring no scheduling conflicts or accidental duplicates

**Steps to Reproduce**:

- Submit a pickup request with user “Jay”, location “Eldoret”, date 2024-06-01 

- Submit another with the same details

- Check the Dashboard to verify

**Expected Behavior**

System blocks duplicate submissions for same user, date, and location

**Actual Behavior**

Two identical requests are accepted with different IDs

**Status (Pass/Fail)**: Fail  
**Severity/Priority (if failed)** : Major





### TC-2.3: Manage Pickup Requests (Modify & Cancel)
**Objective**: Ensure that users can modify or cancel pickup requests directly from their dashboard.

**Steps to Reproduce**

- Log in as Clara.
- Submit a pickup request (for 2025-08-09).
- Navigate to the Dashboard.
- Try to modify or cancel the request.


**Field**: Modify Request

**Expected Behavior**

- "Edit" button  to update request details 

**Actual Behavior**

- No modification option available

**Field**:Cancel Request

**Expected Behavior**
"Cancel" button for pending requests with a confirmation dialog

**Actual Behavior**
No cancel button or logic is implemented

 **Status (Pass/Fail)**: Fail  
 **Severity/Priority (if failed)** : Critical



### TC-2.4: Track Requests Progress

**Objective**: Ensure that users can see live status updates of their pickup requests from the dashboard, reflecting the full request lifecycle ( Pending -Scheduled - Completed)

**Steps to Reproduce**:

- Log in as Clara
- Submit a pickup request
- Admin changes the request status to “Scheduled”.
- Refresh Dashboard - Status text updates

**Expected Behavior**:

- Progress indicator

**Actual Behavior**:

- The Admin gets an alert that status is updated
- Plain text status (“Scheduled”) only for user

**Status (Pass/Fail)**: Fail  
 **Severity/Priority (if failed)** : Major
















