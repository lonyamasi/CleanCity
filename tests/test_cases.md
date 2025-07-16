#  CleanCity –  Test Cases

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




 ## Authentication System and Access control – Test Cases

### TC-AUTH-001: User Registration with Valid Inputs

*** Objective:** Verify that users can register successfully using valid data

*** Test Steps:**

- Navigate to the registration page
- Enter a valid email, username, and strong password
- Click “Register”

*** Expected Result:** User account is created and a success message is displayed
*** Actual Result:** User account is created and a success message is displayed
Status: Done
Severity/Priority(if failed): High

### TC-AUTH-002: User Registration with Invalid Inputs

*** Objective:** Confirm proper validation of incorrect registration data

*** Test Steps:**

- Enter invalid email format and weak password, and whitespace on name
- Leave required fields blank
- Click “Register”

*** Expected Result:** Validation errors are displayed and account creation is blocked
*** Actual Result:** No validation error, account is created
*** Status:** Done
*** Severity/Priority:** High

### TC-AUTH-003: Login with Correct Credentials

***Objective:** Verify successful login with correct credentials

***Test Steps:**

- Navigate to login page
- Enter valid registered email and password
- Click “Login”

***Expected Result:** User is authenticated and redirected to user profile
***Actual Result:** User is authenticated and redirected to user profile
***Status:** Done
*** Severity/Priority:** High

### TC-AUTH-004: Login with Incorrect Credentials

*** Objective:** Ensure login is blocked with incorrect credentials

*** Test Steps:***
- Enter registered email and incorrect password
- Click “Login”

*** Expected Result:*** Error message “Invalid credentials” is shown
*** Actual Result:*** User is able to log in
*** Status:** Done
*** Severity/Priority: *** Critical

### TC-AUTH-005: Password Strength Enforcement

*** Objective:*** Validate password rules during registration

*** Test Steps:***

- Enter a password missing special characters and numbers
- Click “Register”

*** Expected Result:*** Error message prompts for stronger password
*** Actual Result: *** No error message prompt
*** Status: ***  Done
*** Severity/Priority: *** High

### TC-AUTH-006: Secure Session Start and Expiration

*** Objective: *** Ensure session begins securely and expires as expected

*** Test Steps: ***

- Login as a user
- Perform user actions
- Leave browser idle past session timeout limit

*** Expected Result: *** Session automatically logs out after timeout

*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** High

### TC-AUTH-007: Role-Based Access Restriction (Admin vs User)

*** Objective: *** Verify that access controls limit functionality based on user role

*** Test Steps: ***

- Login as User
- Try accessing admin-only page or action
- Repeat steps after logging in as Admin

*** Expected Result: *** Access denied for User, granted for Admin
*** Actual Result: *** Access denied for User, granted for Admin
*** Status: *** Done
*** Severity/Priority: *** Critical

## WASTE MANAGEMENT – Test Cases

### TC-WASTE-001: Schedule Waste Pickup with Valid Inputs

*** Objective: *** Verify users can submit a waste pickup request with correct data

*** Test Steps: ***

- Log in as user
- Navigate to “Schedule Pickup” page
- Fill form: Full Name, Email,pickup location,waste type,preferred pick-up date,additional description
- Click “Submit Request”

*** Expected Result: ***  Request is created and confirmation message shown
*** Actual Result: ***  Request is created and confirmation message shown
*** Status: ***  Done
*** Severity/Priority: ***  High

### TC-WASTE-002: Update Scheduled Pickup Request

*** Objective: ***  Ensure users can modify scheduled waste requests

*** Test Steps: *** 

- Log in as user
- Go to “My Requests”
- Select an upcoming pickup
- Edit pickup date or location
- Save changes

*** Expected Result: ***  Request is updated successfully
*** Actual Result: ***  Request is not shown, cannot be updated
***  Status:  *** Done
***  Severity/Priority: ***  Critical

### TC-WASTE-003: Cancel Scheduled Pickup Request

*** Objective: ***  Confirm users can cancel their waste pickup

*** Test Steps: *** 

- Log in as user
- View scheduled pickups
- Click “Cancel” on desired request
- Confirm cancellation

*** Expected Result: ***  Request status set to “Cancelled” and removed from active list
*** Actual Result: ***  Requests not shown, cannot be updated
*** Status: ***  Done
***  Severity/Priority: ***  Critical

### TC-WASTE-004: Track Request Status

*** Objective: ***  Validate request status updates and display

*** Test Steps: *** 

- Submit pickup request
- Login at intervals to check request status

*** Expected Result: ***  Request progresses from “Pending” → “In Progress” → “Completed”
*** Actual Result: ***  : No request is logged in the first place
*** Status: ***  Done
*** Severity/Priority: ***  High

### TC-WASTE-005: Form Validation – Missing Inputs

*** Objective: ***  Confirm pickup form validation on required fields

*** Test Steps: *** 
## TC2: Waste Management Testing
### TCS-2: Main Operations around waste pickup and handling

### TC-2.1: Pickup and Scheduled Requests Not Displayed

**Objective**: Ensure that users can view, edit, or cancel their pickup requests after submission.

**Test Steps**:

- Register and log in as a Clara.

- Navigate to the "Schedule Pickup" form.

- Enter valid name, email, and waste details.

- Choose a future pickup date and submit.

- Click on the profile button → "My Requests".

- Check if the new pickup request appears.

**Expected**:

Scheduled pickup is visible in the "My Requests" section with correct status and actions (edit/cancel).

**Actual**:

“No waste pickup requests yet” is shown; user cannot view or manage submitted requests.

**Status**: Fail

**Severity**: Critical
**Priority**: High


### TC-2.2 Validate date must be at least 24h in future
**Objective:** Ensure that system only allows dates atleast 24h in the future

- Navigate to “Schedule Pickup”
- Leave location or waste type blank
- Click “Submit”

*** Expected Result: ***  Field error messages shown;
*** Actual Result: *** Field error messages shown;
*** Status: ***  Done
*** Severity/Priority: ***  Critical

### TC-WASTE-006: Request Persistence with localStorage

*** Objective: ***  Ensure requests persist across sessions using localStorage

*** Test Steps: *** 
- Go to the Schedule Pickup tab of the CleanCity website.

- Fill in the pickup request form with name(Clara), location(Mombasa), and waste type(Recyclable).

- For Preferred Pickup Date, choose a date in the past (2024-01-06).

- Submit the form.

**Expected Behavior**:

- Submit pickup request
- Log out or close browser
- Reopen site and log in
- Check “My Requests” list

*** Expected Result: ***  Request is still visible; data loaded from localStorage or synced backend
***  Actual Result: ***  Pending
*** Status: ***  Pending
***  Severity/Priority: ***  Medium

### Edge Cases
### TC-WASTE-009: Scheduling with Past Date

*** Objective: *** Prevent users from selecting a pickup date in the past

*** Test Steps: *** 

- Open pickup scheduling form
- Select a date prior to today
- Submit form

*** Expected Result: ***  Validation error shown; form not submitted
*** Actual Result: ***  Scheduling is done with past date
*** Status: ***  Done
*** Severity/Priority: ***  Critical

**Status**: Fail 

**Severity**: Critical
**Priority** : High

### TC-2.3 Duplicate Pickup Requests for Same User, Date, and Location
**Objective**: Test that the system does not allow a user to submit multiple pickup requests for the same location and date, ensuring no scheduling conflicts or accidental duplicates

 ### TC-WASTE-010: Duplicate Pickup Request by Same User

*** Objective: *** Verify if the system allows a user to submit two identical pickup requests
- Submit a pickup request with user “Clara”, location “Mombasa”, date 2024-06-01 

*** Test Steps: ***

- Login as a registered user
- Navigate to “Schedule Pickup” form
- Submit a request with specific values (e.g. location: “Green Lane”, date: “2025-07-15”, waste type: “Organic”)
- Without changing any fields, submit the same request again
- View request list or confirmation status

*** Expected Result: ***
- One of the following should occur:
- Duplicate request is blocked with a validation message: “You already submitted a request with similar details”
- System allows it but flags it visually or merges the requests


*** Actual Result: *** All requests submitted
*** Status:*** Done
*** Severity/Priority: *** High


**Status (Pass/Fail)**: Fail  

## DASHBOARD AND ANALYTICS – Test Cases

### TC-DASH-001: Load User Dashboard on Login

***  Objective: ***  Ensure dashboard loads successfully for authenticated users

*** Test Steps: *** 
- Log in with valid credentials
- Wait for redirect or navigate to /dashboard

*** Expected Result: ***  Dashboard page loads with personalized components
*** Actual Result: ***  Profile with personalized components loads
*** Status: *** Done
*** Severity/Priority: *** High
**Severity** : Major
**Priority** : Medium

### TC-2.4: Manage Pickup Requests (Modify & Cancel)
**Objective**: Ensure that users can modify or cancel pickup requests directly from their dashboard.

### TC-DASH-002: Statistics Accuracy Based on User Activity

*** Objective: *** Verify dashboard reflects correct user-generated stats
- Log in as Clara.

- Submit a pickup request (for 2025-08-09).

- Navigate to the Dashboard.

- Try to modify or cancel the request.

*** Test Steps: ***

- Perform specific actions (e.g., submit 3 pickup requests)
- View dashboard after each action

*** Expected Result: *** Count and statistics update to reflect performed actions
*** Actual Result: *** No updates on the performed actions
*** Status: *** Done
*** Severity/Priority: *** High

### TC-DASH-003: Chart Rendering with Varying Data Sets

*** Objective: *** Confirm charts adapt to changes in dataset volume and diversity

*** Test Steps: ***

- Login and trigger chart component
- Vary data ranges (empty, minimal, large sets)
- Observe chart rendering

*** Expected Result: *** Charts adjust without breaking layout; appropriate fallback for empty sets
*** Actual Result: *** No charts are rendered
*** Status: *** Done
*** Severity/Priority: *** High

### TC-DASH-004: Leaderboard Update Based on User Actions

*** Objective: *** Validate dynamic leaderboard reflects recent user performance
 **Status (Pass/Fail)**: Fail  

 **Severity** : Critical
 **Priority** : High

*** Test Steps: ***

- Complete leaderboard-triggering actions (e.g., most pickups, feedback)
- Compare position in leaderboard before and after

*** Expected Result: *** User rank updates accordingly; no delay or misrank
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** Medium
### TC-2.5: Track Requests Progress

### TC-DASH-005: Slow or Failed Data Fetch

*** Objective: *** Observe behavior when dashboard APIs respond slowly or fail

*** Test Steps: ***
- Log in as Clara
- Submit a pickup request
- Refresh Dashboard 

- Simulate API latency or disconnect
- Load dashboard

*** Expected Result: *** Dashboard shows loading state, fallback UI, or error message
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** Medium
- Progress indicator or message alert

 ## CONTENT MANAGEMENT

### TC-CONTENT-001: Admin – Create Blog Article

*** Objective: *** Verify admin users can successfully create and publish articles
- There is no alert or progress indicator

**Status (Pass/Fail)**: Fail 

**Severity** : Major
**Priority**: Medium

*** Test Steps: ***

- Login as admin
- Navigate to blog creation section
- Fill in title, body, category, and publish settings
- Click “Publish”

*** Expected Result: *** Article is saved and appears in blog feed
*** Actual Result: *** No blog creation section
*** Status: *** Done
*** Severity/Priority: *** High


### TC-CONTENT-002: Admin – Edit Existing Blog Article
*** Objective: *** Ensure article content can be modified by admin

*** Test Steps: ***

- Login as admin
- Access blog manager
- Open existing article and modify content
- Save changes

*** Expected Result: *** Changes reflected in the live article view
*** Actual Result: *** No editing features of blogs
*** Status: *** Done
*** Severity/Priority: *** High

### TC-CONTENT-003: Admin – Delete Blog Article
*** Objective: *** Confirm admins can remove blog posts

*** Test Steps: ***

- Login as admin
- Locate published article
- Click “Delete” and confirm action

*** Expected Result: *** Article removed from blog feed
*** Actual Result: *** No editing/ deleting features on blogs
*** Status: *** Done
*** Severity/Priority: *** High

### TC-CONTENT-004: User – Submit Blog Comment
*** Objective: *** Validate users can comment on articles

*** Test Steps: ***

- Login as user
- View blog article
- Write and submit a comment

*** Expected Result: *** Comment appears below article with timestamp and user ID
*** Actual Result: *** Comment appears but disappears on reload
*** Status: *** Done
*** Severity/Priority: *** Medium

### TC-CONTENT-005: View Blog Comments

*** Objective: *** Ensure all users can view article comments

*** Test Steps: ***
- Visit a blog post
- Scroll to comment section

*** Expected Result: *** Comments load properly and display in chronological order
*** Actual Result: *** No comments displayed including one from user himslef
*** Status: *** Done
*** Severity/Priority: *** Low

## TC-CONTENT-006: Post to Community Feed

*** Objective: *** Verify that users can post text, images, or links to the feed

*** Test Steps: ***

- Login as user
- Navigate to Community Feed
- Create a new post with text and optional media
- Click “Post”

*** Expected Result: *** Content appears in feed and is visible to all users
*** Actual Result: *** Content appears in feed and is visible to all users
*** Status: *** Done
*** Severity/Priority: *** High

### TC-CONTENT-007: Feed Interactions – Likes & Comments

*** Objective: *** Confirm likes and comments function on community posts

*** Test Steps: ***

- View feed post
- Click “Like” and add a comment
- Reload feed

*** Expected Result: *** Like count updates and comment displays correctly
*** Actual Result: *** Like count updates and comment displays correctly
*** Status: *** Done
*** Severity/Priority: *** Medium

### TC-CONTENT-008: Load Awareness Content (Tips, Quizzes, Infographics)

*** Objective: *** Ensure awareness section loads properly across formats

*** Test Steps: ***

- Navigate to awareness section
- View tips, take a quiz, and open an infographic

*** Expected Result: *** Content loads without errors; quizzes are interactive
*** Actual Result: *** Content loads without errors; quizzes are interactive
*** Status: *** Done
*** Severity/Priority: *** Medium

 ## User Management – Functional Test Cases

### TC-USER-001: Update Profile Information
---

## TC-4: Blog Filter Functionality
### Test Case ID & Title: TC-4.1 – Blog Filter Feature

**Objective**: Ensure blog category filters show relevant posts.

*** Objective: *** Verify users can update their personal details successfully

*** Test Steps: ***

- Login as a registered user
- Navigate to “Profile Settings”
- Modify fields (name, email)
- Click “Save”

*** Expected Result: *** Updated information is saved and reflected immediately
*** Actual Result: *** Updated information is saved and reflected immediately
*** Status: *** Done
*** Severity/Priority: ***: High

### TC-USER-002: Invalid Profile Inputs

*** Objective: *** Confirm validation errors trigger when updating with invalid data

*** Test Steps: ***

- Enter incorrectly formatted email or empty required fields
- Click “Save”

*** Expected Result: *** Errors prevent saving; appropriate validation messages shown
*** Actual Result: *** No errors, invalid data accepted
*** Status: *** Done
*** Severity/Priority: *** High

### TC-USER-003: Access Notifications (Read/Unread)

*** Objective: *** Ensure users can view and manage notifications properly

*** Test Steps: ***

- Login and trigger actions that generate notifications
- Open notification center
- Mark notifications as “Read” or delete them
- Login as Clara

- Navigate to Blog section.

- Select a specific Tags filter (“Recycling”).

- Observe the displayed blog posts.

**Expected**: Only blog posts matching the selected category should be displayed.

**Actual**: All blog posts continue to appear regardless of the selected filter.

**Status**: Fail

**Severity**: High

**Priority**: High

---

## TC-5: Community Post Visibility
### Test Case ID & Title: TC-5.1 – Community Post Submission

**Objective**: Validate that newly submitted community posts are visible.

**Test Steps**:

- Log in and go to the Community section.

- Submit a valid new post.

- Reload the community view.

**Expected**: New post appears immediately under community posts.

**Actual**: Post is submitted and visible after posting.

**Status**: Pass

**Severity**: High

**Priority**: High

---

## TC-6: Awareness section (Quiz Score Loop Bug)
### Test Case ID & Title: TC-6.1 – Quiz Score Reset

**Objective**: Ensure the quiz resets or ends after reaching the score limit.

**Test Steps**:

- Login as user Clara

- Start the quiz.

- Answer 3 questions.

- Observe if the quiz ends or restarts.

**Expected**: After reaching 3/3 answers, quiz should reset or show a completion screen.

**Actual**:
Quiz continues incrementing score to 3/4, 6/6 instead of ending.

**Status**: Fail

**Severity**: Medium

**Priority**: Medium

## TC-6: Awareness section (Report Issue Redirection)
### Test Case ID & Title: TC-6.2 – Report Issue Feedback Redirection

**Objective**: Ensure logged-in users can access the report issue page.

**Test Steps**:

- Log in as user Clara.

- Click the "Report Issue" button from the navigation menu.

**Expected**: User is taken to the Report Issue page.

**Actual**:
User is redirected to the Feedback page.

**Status**: Pass

**Severity**: Medium

**Priority**: High

## TC-7: Feedback Validation Form 
### Test Case ID & Title: TC-7.1 – Feedback Requires Pickup Request ID

**Objective**: Ensure users must enter valid request ID to submit feedback.

**Test Steps**:

- Log in  as user Clara

- Navigate to the Feedback section.

- Enter the request ID and feedback.

- Leave the request ID field blank.

- Submit the form.

**Expected**: Form shows an error requiring a valid request ID.

**Actual**: Feedback not submitted; validation works but message is not user-friendly or intuitive.

**Status**: Pass

**Severity**: Minor

**Priority**: Low

## TC-7: Feedback Not Visible in Dashboard
### Test Case ID & Title: TC-7.2 – Feedback Visibility

**Objective**: Confirm user feedback is displayed or accessible post-submission.

**Test Steps**:

- Submit feedback with request ID.

- Navigate to Dashboard to view.

**Expected**: Feedback should be viewable in user interface.

**Actual**: No feedback listing or confirmation is visible anywhere after submission.

**Status**: Fail

**Severity**: Medium

**Priority**: Medium

---

## TC-7: Invalid Feedback ID
### Test Case ID & Title: TC-7.3 – Invalid Request ID Accepted in Feedback Form

**Objective**: Ensure the feedback form accepts only valid and owned request IDs.

**Test Steps**:

- Log in as user Clara.

- Navigate to the "Feedback" section.

- In the Request ID field, enter an ID like RE01234.

- Enter valid feedback.

- Submit the feedback form.

**Expected**: System should reject the input and show an error like: "Invalid Request ID. You can only provide feedback on your own scheduled pickups."

**Actual**: Feedback is accepted and saved even when the Request ID does not belong to the current user or is invalid.

**Status**: Fail

**Severity**: Critical

**Priority**: High

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

---

## NTC-8: Login Field Persistence after Logout
### Test Case ID & Title: NFTC-8 - Login Field Persistence After Logout

**Objective**: Ensure that user login fields (email and password) are cleared after logging out to protect user privacy and session integrity.

**Test Steps**:

- Log in user Clara.

- Navigate through the app.

- Click the Logout button.

- Navigate to the login page, refresh the page.

- Observe whether the email and password fields are pre-filled.

**Expected**: Email and password fields should be empty on the login page.

**Actual**: Email and password fields remain populated after logout and refresh(Firefox browser autofills).

**Status**: Fail

**Severity**: High

**Priority**: Critical

---



*** Expected Result: *** Notifications reflect correct status; unread count updates
*** Actual Result: *** No notification is posted
*** Status: *** Done
*** Severity/Priority: *** Low

### TC-USER-004: Submit Feedback

*** Objective: *** Verify feedback form works correctly

*** Test Steps: ***

- Login and navigate to “Feedback” section
- Fill out form with subject and message
- Click “Submit”

*** Expected Result: *** Feedback sent successfully and confirmation message displayed
*** Actual Result: *** Feedback sent successfully and confirmation message displayed
*** Status: *** Done
*** Severity/Priority: *** High

### TC-USER-005: Confirm Feedback Delivery

*** Objective: *** Confirm feedback reaches is stored/reported properly

*** Test Steps: ***

- Submit feedback
- Login as admin and check feedback panel

*** Expected Result: *** Feedback appears under user’s entry with full details
*** Actual Result: *** No feed back appears
*** Status: *** Done
*** Severity/Priority: ***: High

### TC-USER-006: Admin Access to User List

*** Objective: *** Ensure admin can view and manage user data

*** Test Steps: ***

- Login as admin
- Navigate to “Dashboard” section
- View user list with editing abilities

*** Expected Result: *** User data loads successfully; admin tools available
*** Actual Result: *** User data loads successfully; admin tools available
*** Status: *** Done
*** Severity/Priority: *** High




 ## Non-Performance Test Cases (LocalStorage-Based)

### TC-PERF-LS-001: Page Load Time with localStorage Reads

*** Objective: *** Ensure data retrieval from localStorage doesn’t degrade page load speed

*** Test Steps: ***

- Populate localStorage with pickup requests, user data
- Reload dashboard and scheduling page

*** Expected Result: *** Pages load within 3 seconds; stored data is rendered instantly
*** Actual Result: *** Pages load within 3 seconds; stored data is rendered instantly
*** Status: *** Done
*** Severity/Priority: *** High

### TC-PERF-LS-002: Stress Testing localStorage Limits

*** Objective: *** Determine app stability when localStorage nears capacity

*** Test Steps: ***

- Create hundreds of pickup requests or feed entries
- Confirm data persistence and UI responsiveness

*** Expected Result: *** App doesn’t crash or freeze; alerts shown if storage is full
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: ***: Medium

## Security Test Cases (LocalStorage Constraints)


### TC-SEC-LS-001: Check Exposure of Sensitive Data in DevTools

*** Objective: *** Ensure sensitive session/user data isn't stored in localStorage

*** Test Steps: ***

- Login and inspect localStorage via DevTools
- Look for access tokens, emails, passwords

*** Expected Result: *** No sensitive data stored; only non-critical info retained
*** Actual Result: *** Sensitive data is stored and visible
*** Status: *** Done
*** Severity/Priority: *** Critical



 read in logical order with meaningful labels
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** Critical

### TC-ACCESS-002: Keyboard Navigation Support

*** Objective: *** Confirm keyboard-only users can fully interact with the app

*** Test Steps: ***

- Use Tab, Shift+Tab, Enter, Arrow keys to move through UI
- Focus on forms, menus, modals, and dashboard cards

*** Expected Result: *** Logical tab flow, visible focus indicators, all actions accessible without mouse
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** High

### TC-ACCESS-003: Contrast Ratio Compliance

*** Objective: *** Ensure text and UI elements meet WCAG AA (4.5:1) or AAA contrast ratios

*** Test Steps: ***

- Use accessibility checker (e.g., Axe, WAVE)
- Scan text, buttons, icons, input fields

*** Expected Result: *** All interactive elements pass contrast requirements
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** High

### TC-ACCESS-004: Alt Text for Images and Icons

*** Objective: *** Validate descriptive alt text is present for images and icons

*** Test Steps: ***

- Inspect blog posts, feed, dashboard icons
- Hover or use screen reader to detect alt attribute

*** Expected Result: *** All images have meaningful alt descriptions or role="presentation" where decorative
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** Medium

### Cross-Browser Compatibility – Test Cases

| Test Case ID   | Browser    | Platforms        | Description                                          | Expected Result                   | Severity/Priority |
|----------------|------------|------------------|------------------------------------------------------|-----------------------------------|-------------------|
| TC-CROSS-001   | Chrome     | Windows, Android | Load all pages and validate styling, functionality   | Smooth performance across devices | High              |
| TC-CROSS-002   | Firefox    | Windows, macOS   | Test form inputs, dashboard, blog, feed              | Forms submit and render correctly | Medium            |
| TC-CROSS-003   | Safari     | iOS, macOS       | Ensure layout and navigation work on mobile Safari   | Responsive design adapts properly | High              |
| TC-CROSS-004   | Edge       | Windows          | Test localStorage retrieval and UI responsiveness    | Data persists and UI loads cleanly| Medium            |
| TC-CROSS-005   | Opera      | Windows, Linux   | Check navigation and content rendering               | No layout breaks or script errors | Medium            |











