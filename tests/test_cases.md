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


### TC-1.4: Verify Login with Correct Credentials

**Objective:** Ensure that a user can successfully log into the system using valid username and password

**Steps to Reproduce:**

- Navigate to the login page
- Enter valid credentials (e.g., Email: user@cleancity.com, password: SecurePass123)
- Click the "Login" button

**Expected Behavior:**
- User is not authenticated for log in 

**Actual Behavior:**
- Error pops out- Invalid Email or password

**Status (Pass/Fail):** Pass
**Severity/Priority (if failed):** Critical




### TC-1.5: Admin Function Access Restriction

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

### TC-2.1 Validate date must be at least 24h in future
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




### TC-2.2 Duplicate Pickup Requests for Same User, Date, and Location
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


---
## TC-3: Dashboard & Analytics Testing
### TC-3.1: Gamification Badge & Points System
### **Test Case ID & Title: TC-CLEANCITY-55**
**Objective** : Ensure eligible actions trigger points and badge unlocks as achievements.
**Test Steps**: 
- Log in with a test user credential.

- Submit a waste pickup request.

- Complete a quiz from the awareness section.

- Post in the community feed.

- Return to the dashboard.

**Expected Behaviour**: Points and badges update for completed activities.

**Actual Behaviour** : No changes appear for pickups, quizzes, or points. ‘No badges yet. Start participating!'

**Status (Pass/Fail)**: Fail  
 **Severity/Priority (if failed)** : Major


### TC-3.2: Validate Charts and Export for Analytics
### **Test Case ID & Title: TC-CLEANCITY-53**
**Objective** : Test visual analytics and export feature for user data.
**Test Steps**: 
- Login as newuser.

- Post blogs, schedule pick ups, share in the community feed

- Go to dashboard to view Dashboard analytics.

**Expected Behaviour**: View users activity with charts and trends showing analysis on top users and missed, total requests and blog posts


**Actual Behaviour** : User dashboard analytics has no updated data despite posting and scheduling requests


**Status (Pass/Fail)**: Fail  
 **Severity/Priority (if failed)** : Major


### TC-3.3 – Unauthorized Dashboard Access
### **Test Case ID & Title: TC-3.3** – Prevent Unauthenticated Dashboard Access

**Objective**: To verify that only registered and authenticated users can access the dashboard.

**Test Steps**:

- Click on home page without logging in.

- Click on dashboard as a random user.

- Input a random email that isn’t a registered user; ray@gmail.com then password.

- Login

**Expected**:

The system should display an authentication error.

Access to the dashboard should be denied unless the user is registered and logged in.

**Actual**:

The dashboard becomes accessible.

A new account is created using the unregistered email without proper verification.

**Status (Pass/Fail)**: Fail

**Severity/Priority (if failed)**: Critical / Highest


### TC-3.4: Pickup and Scheduled Requests Not Displayed
### **Test Case ID & Title**: TC-3.4 – Scheduled Pickup Visibility

**Objective**: Ensure that users can view, edit, or cancel their pickup requests after submission.

**Test Steps**:

Register and log in as a new user.

Navigate to the "Schedule Pickup" form.

Enter valid name, email, and waste details.

Choose a future pickup date and submit.

Click on the profile button → "My Requests".

Check if the new pickup request appears.

**Expected**:

Scheduled pickup is visible in the "My Requests" section with correct status and actions (edit/cancel).

**Actual**:

“No waste pickup requests yet” is shown; user cannot view or manage submitted requests.

**Status (Pass/Fail)**: Fail

**Severity/Priority (if failed)**: Critical / High

---

# NON-FUNCTIONAL TEST CASES
## NTC-1: Page Load Performance on Dashboard
### Test Case ID & Title: NFTC-001 - Dashboard Load Performance

**Objective**: Ensure dashboard loads under 2 seconds with <100 pickup requests.

**Test Steps**:

- Login as user Clra.

- Navigate to the dashboard page.

- Open Chrome DevTools → Performance tab.

- Record the page load timeline.

- Observe Largest Contentful Paint (LCP) time and overall load duration.

**Expected**: Dashboard should load within 2 seconds.

**Actual**: Load time is 1.38 seconds.

**Status**: Pass

**Severity**: Medium 
**Priority*(if failed)**: High


## NTC-2: Mobile Responsiveness Check
### Test Case ID & Title: NFTC-002 - Responsive Design

**Objective**: Validate mobile responsiveness across screen sizes.

**Test Steps**:

- Open the website on Chrome DevTools using the Device Toggle icon(responsive mode).

- Test screen widths from **320px to 1440px** manually adjusting the width.

- Observe how navigation and content behave at key breakpoints:

   * 320px (small phones)
   * 375px (iPhones)
   * 414px (larger phones)
   * 768px (tablets)
   * 1024px+ (laptops/desktops)


**Expected**: The layout should adjust smoothly at all breakpoints without content overlap, cutoff, or misalignment. The navigation bar should collapse appropriately on smaller screens.

**Actual**: 
**Above 750px**: Layout is responsive; navigation does not interfere with content.
**Below 750px** (375px): Navigation bar overlaps main content, making the UI unusable on smaller devices.
**Status**:Fail

**Severity** : High
**Priority**: Medium

---

## NTC-3: Screen Reader Compatibility (WCAG 2.1)
### Test Case ID & Title: NFTC-003 - Screen Reader Support

**Objective**: Ensure accessibility for visually impaired users.

**Test Steps**:

- Load the website on the browser

- Enable screen reader (NVDA).

- Navigate through website  pages.

**Expected**: Proper alt text, ARIA labels, and tab order.

**Actual**: All accessibility elements were present; navigation and labels were correctly announced by the screen reader.

**Status**: Pass

**Severity**: High
**Priority(if failed)**: High 

---

## NTC-4: Keyboard Navigation Accessibility
### Test Case ID & Title: NFTC-4 - Keyboard Navigation

**Objective**: Verify all features are accessible by keyboard.

**Test Steps**:

- Use the Tab key to move through focusable elements.

- Use Arrow keys to scroll where needed.

- Use the Enter key to activate buttons.


**Expected**: All interactive elements should be reachable and usable in a logical tab order, with clear visible focus.

**Actual**: All key functions were operable via keyboard; tab order was mostly logical and usable.

**Status**: Pass

**Severity**: Medium
**Priority**: Medium 

---

## NTC-5: Usability (Font Readability and Color Contrast)
### Test Case ID & Title: NFTC-5 – Font Readability and Color Contrast Compliance

**Objective**: Ensure UI text meets WCAG 2.1 contrast ratio and readability standards.

**Test Steps**:

- Load the website.

- Use Chrome Dev Tools-> Lighthouse-> Accessibility to test contrast ratios between text and background.

- Examine font sizes and font styles used across headings, buttons, labels, and body text using Fonts Ninja.

- Identify any inconsistent or low-contrast color usage affecting readability.

**Expected**: All text should meet at least 4.5:1 contrast ratio for normal text, 3:1 for bold text, the minimum font size should be 14px for optimal readability,the used font should be constant all through.

**Actual**: Text appears in various colors including light greenish, ash gray, dark blue, and black.
- The light greenish and ash gray text fail contrast requirements against the white background (contrast ratio < 4.5:1).

- Some UI text (placeholders-> 1 of 3) uses a 12px font size, which may cause readability issues, especially for users with low vision.

- Font families include Segoe UI, Arial, Monospace and cursive bold, creating inconsistency across UI sections.

**Status**: Fail

**Severity**: Medium
**Priority**: Medium 

---

## NTC-6: Compatibility on Firefox, Chrome, and Edge
### Test Case ID & Title: NFTC-6 - Cross-Browser Compatibility

**Objective**: Ensure uniform functionality across modern browsers.

**Test Steps**:

- Open CleanCity on Chrome, Firefox, Safari, and Edge.

- Verify layout, login, and dashboard features.

**Expected**: Features and layout consistent.

**Actual**: Firefox has styling glitches on dashboard table.

**Status**: Pass

**Severity**: Medium
**Priority**: Medium

---

## NTC-7: Session Timeout Security
### Test Case ID & Title: NFTC-7 - Session Expiration

**Objective**: Validate automatic session logout after 10 minutes idle.

**Test Steps**:

- Logged in as user Clara(3:36PM-4:09PM).

- Attempted to navigate through the website at 4:08PM.

**Expected**: Session should expire and user logged out.

**Actual**: Session persists even after 20 minutes.

**Status**: Fail

**Severity**: High
**Priority**: Critical


# AUTOMATED TEST CASES
## ATC-1: Data Management
### Test Case ID & Title: AFTC-001 - Data in Local Storage

**Objective**: Ensure Data is saved and retrieved from localStorage correctly

##  Unit Tests for dataService Module

These tests verify data persistence, error handling, and user management

| Test ID | Test Description                                                | Status |
|---------|------------------------------------------------------------------|--------|
| DS-TC-01 | Adds a new pickup request and ensures it's saved to storage     | Pass     |
| DS-TC-02 | Gracefully handles corrupted JSON in localStorage               | Pass     |
| DS-TC-03 | Prevents adding duplicate users with the same email             | Pass     |
| DS-TC-04 | Confirms authentication and admin role recognition from session | Pass     |

---

### Test Snippets

####  DS-TC-01: Add Pickup Request
```js
test('adds a new pickup request and persists it', () => {
  localStorage.clear();
  dataService.clearAllData();
  const requestData = {
    fullName: 'Test User',
    location: 'Nairobi',
    wasteType: 'General Waste',
    preferredDate: '2024-07-20',
  };
  const added = dataService.addPickupRequest(requestData);
  const requests = dataService.getAllPickupRequests();
  expect(requests).toContainEqual(added);
});


**Severity**: High 
**Priority*(if failed)**: High
 













