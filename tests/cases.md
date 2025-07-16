 
 
 
 ## Authentication System – Test Cases

### TC-AUTH-001: User Registration with Valid Inputs

*** Objective:** Verify that users can register successfully using valid data

*** Test Steps:**

- Navigate to the registration page
- Enter a valid email, username, and strong password
- Click “Register”

*** Expected Result:** User account is created and a success message is displayed
*** Actual Result:** Pending
Status: Pending
Severity/Priority: High

### TC-AUTH-002: User Registration with Invalid Inputs

*** Objective:** Confirm proper validation of incorrect registration data

*** Test Steps:**

- Enter invalid email format and weak password
- Leave required fields blank
- Click “Register”

*** Expected Result:** Validation errors are displayed and account creation is blocked
*** Actual Result:** Pending
*** Status:** Pending
*** Severity/Priority:** High

### TC-AUTH-003: Login with Correct Credentials

***Objective:** Verify successful login with correct credentials

***Test Steps:**

- Navigate to login page
- Enter valid registered email and password
- Click “Login”

***Expected Result:** User is authenticated and redirected to dashboard
***Actual Result:** Pending
***Status:** Pending
*** Severity/Priority:** High

### TC-AUTH-004: Login with Incorrect Credentials

*** Objective:** Ensure login is blocked with incorrect credentials

*** Test Steps:***
- Enter registered email and incorrect password
- Click “Login”

*** Expected Result:*** Error message “Invalid credentials” is shown
*** Actual Result:*** Pending
*** Status:*** Pending
*** Severity/Priority: *** Medium

### TC-AUTH-005: Password Strength Enforcement

*** Objective:*** Validate password rules during registration

*** Test Steps:***

- Enter a password missing special characters and numbers
- Click “Register”

*** Expected Result:*** Error message prompts for stronger password
*** Actual Result: *** Pending
*** Status: ***  Pending
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
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** Critical

## WASTE MANAGEMENT – Test Cases

### TC-WASTE-001: Schedule Waste Pickup with Valid Inputs

*** Objective: *** Verify users can submit a waste pickup request with correct data

*** Test Steps: ***

- Log in as user
- Navigate to “Schedule Pickup” page
- Fill form: location, date, waste type, contact info
- Click “Submit”

*** Expected Result: ***  Request is created and confirmation message shown
*** Actual Result: ***  Pending
*** Status: ***  Pending
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
*** Actual Result: ***  Pending
***  Status:  *** Pending
***  Severity/Priority: ***  Critical

### TC-WASTE-003: Cancel Scheduled Pickup Request

*** Objective: ***  Confirm users can cancel their waste pickup

*** Test Steps: *** 

- Log in as user
- View scheduled pickups
- Click “Cancel” on desired request
- Confirm cancellation

*** Expected Result: ***  Request status set to “Cancelled” and removed from active list
*** Actual Result: ***  Pending
*** Status: ***  Pending
***  Severity/Priority: ***  High

### TC-WASTE-004: Track Request Status

*** Objective: ***  Validate request status updates and display

*** Test Steps: *** 

- Submit pickup request
- Login at intervals to check request status

*** Expected Result: ***  Request progresses from “Pending” → “In Progress” → “Completed”
*** Actual Result: ***  Pending
*** Status: ***  Pending
*** Severity/Priority: ***  High

### TC-WASTE-005: Form Validation – Missing Inputs

*** Objective: ***  Confirm pickup form validation on required fields

*** Test Steps: *** 

- Navigate to “Schedule Pickup”
- Leave location or waste type blank
- Click “Submit”

*** Expected Result: ***  Field error messages shown; form not submitted
*** Actual Result: ***  Pending
*** Status: ***  Pending
*** Severity/Priority: ***  Critical

### TC-WASTE-006: Request Persistence with localStorage

*** Objective: ***  Ensure requests persist across sessions using localStorage

*** Test Steps: *** 

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
*** Actual Result: ***  Pending
*** Status: ***  Pending
*** Severity/Priority: ***  High

### TC-WASTE-011: Schedule Pickup with Edge Location Values

*** Objective: ***  Validate address field handles edge-case values like coordinates or special characters
*** Test Steps:*** 

- Enter location like “@@@!” or GPS coordinates
- Submit pickup request

*** Expected Result: ***  Either proper validation or intelligent auto-correction
*** Actual Result: ***  Pending
*** Status: ***  Pending
*** Severity/Priority: ***  Medium


## DASHBOARD AND ANALYTICS – Test Cases

### TC-DASH-001: Load User Dashboard on Login

***  Objective: ***  Ensure dashboard loads successfully for authenticated users

*** Test Steps: *** 
- Log in with valid credentials
- Wait for redirect or navigate to /dashboard

*** Expected Result: ***  Dashboard page loads with personalized components
*** Actual Result: ***  Pending
*** Status: *** Pending
*** Severity/Priority: *** High

### TC-DASH-002: Statistics Accuracy Based on User Activity

*** Objective: *** Verify dashboard reflects correct user-generated stats

*** Test Steps: ***

- Perform specific actions (e.g., submit 3 pickup requests)
- View dashboard after each action

*** Expected Result: *** Count and statistics update to reflect performed actions
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** High

### TC-DASH-003: Chart Rendering with Varying Data Sets

*** Objective: *** Confirm charts adapt to changes in dataset volume and diversity

*** Test Steps: ***

- Login and trigger chart component
- Vary data ranges (empty, minimal, large sets)
- Observe chart rendering

*** Expected Result: *** Charts adjust without breaking layout; appropriate fallback for empty sets
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** Medium

### TC-DASH-004: Leaderboard Update Based on User Actions

*** Objective: *** Validate dynamic leaderboard reflects recent user performance

*** Test Steps: ***

- Complete leaderboard-triggering actions (e.g., most pickups, feedback)
- Compare position in leaderboard before and after

*** Expected Result: *** User rank updates accordingly; no delay or misrank
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** Medium

### TC-DASH-005: Slow or Failed Data Fetch

*** Objective: *** Observe behavior when dashboard APIs respond slowly or fail

*** Test Steps: ***

- Simulate API latency or disconnect
- Load dashboard

*** Expected Result: *** Dashboard shows loading state, fallback UI, or error message
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** Medium

 ## CONTENT MANAGEMENT

### TC-CONTENT-001: Admin – Create Blog Article

*** Objective: *** Verify admin users can successfully create and publish articles

*** Test Steps: ***

- Login as admin
- Navigate to blog creation section
- Fill in title, body, category, and publish settings
- Click “Publish”

*** Expected Result: *** Article is saved and appears in blog feed
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** High

✏️ TC-CONTENT-002: Admin – Edit Existing Blog Article
*** Objective: *** Ensure article content can be modified by admin

*** Test Steps: ***

- Login as admin
- Access blog manager
- Open existing article and modify content
- Save changes

*** Expected Result: *** Changes reflected in the live article view
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** Medium

🗑️ TC-CONTENT-003: Admin – Delete Blog Article
*** Objective: *** Confirm admins can remove blog posts

*** Test Steps: ***

- Login as admin
- Locate published article
- Click “Delete” and confirm action

*** Expected Result: *** Article removed from blog feed and backend database
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** High

💬 TC-CONTENT-004: User – Submit Blog Comment
*** Objective: *** Validate users can comment on articles

*** Test Steps: ***

- Login as user
- View blog article
- Write and submit a comment

*** Expected Result: *** Comment appears below article with timestamp and user ID
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** Medium

👀 TC-CONTENT-005: View Blog Comments

*** Objective: *** Ensure all users can view article comments

*** Test Steps: ***
- Visit a blog post
- Scroll to comment section

*** Expected Result: *** Comments load properly and display in chronological order
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** Low

📣 TC-CONTENT-006: Post to Community Feed

*** Objective: *** Verify that users can post text, images, or links to the feed

*** Test Steps: ***

- Login as user
- Navigate to Community Feed
- Create a new post with text and optional media
- Click “Post”

*** Expected Result: *** Content appears in feed and is visible to all users
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** Medium

👍 TC-CONTENT-007: Feed Interactions – Likes & Comments

*** Objective: *** Confirm likes and comments function on community posts

*** Test Steps: ***

- View feed post
- Click “Like” and add a comment
- Reload feed

*** Expected Result: *** Like count updates and comment displays correctly
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** Medium

🎓 TC-CONTENT-008: Load Awareness Content (Tips, Quizzes, Infographics)

*** Objective: *** Ensure awareness section loads properly across formats

*** Test Steps: ***

- Navigate to awareness section
- View tips, take a quiz, and open an infographic

*** Expected Result: *** Content loads without errors; quizzes are interactive
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** Medium

 User Management – Functional Test Cases

📝 TC-USER-001: Update Profile Information

*** Objective: *** Verify users can update their personal details successfully

*** Test Steps: ***

- Login as a registered user
- Navigate to “Profile Settings”
- Modify fields (name, email, password, preferences)
- Click “Save”

*** Expected Result: *** Updated information is saved and reflected immediately
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: ***: Medium

🎨 TC-USER-002: Invalid Profile Inputs

*** Objective: *** Confirm validation errors trigger when updating with invalid data

*** Test Steps: ***

- Enter incorrectly formatted email or empty required fields
- Click “Save”

*** Expected Result: *** Errors prevent saving; appropriate validation messages shown
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** Medium

🔔 TC-USER-003: Access Notifications (Read/Unread)

*** Objective: *** Ensure users can view and manage notifications properly

*** Test Steps: ***

- Login and trigger actions that generate notifications
- Open notification center
- Mark notifications as “Read” or delete them

*** Expected Result: *** Notifications reflect correct status; unread count updates
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** Low

📤 TC-USER-004: Submit Feedback

*** Objective: *** Verify feedback form works correctly

*** Test Steps: ***

- Login and navigate to “Feedback” section
- Fill out form with subject and message
- Click “Submit”

*** Expected Result: *** Feedback sent successfully and confirmation message displayed
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** Medium

✅ TC-USER-005: Confirm Feedback Delivery

*** Objective: *** Confirm feedback reaches backend and is stored/reported properly

*** Test Steps: ***

- Submit feedback
- Login as admin and check feedback panel

*** Expected Result: *** Feedback appears under user’s entry with full details
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: ***: Medium

🛂 TC-USER-006: Admin Access to User List

*** Objective: *** Ensure admin can view and manage user data

*** Test Steps: ***

- Login as admin
- Navigate to “User Management” section
- View user list with pagination and filters

*** Expected Result: *** User data loads successfully; admin tools available
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** High

📈 TC-USER-007: Admin View of Activity Reports

*** Objective: *** Confirm admin can access detailed activity logs and reporting

*** Test Steps: ***

- Login as admin
- Open analytics or activity module
- Filter by date range, user type, actions

*** Expected Result: *** Accurate report generated and exportable if designed to be
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** High


 Performance Test Cases (LocalStorage-Based)
⏱️ TC-PERF-LS-001: Page Load Time with localStorage Reads

*** Objective: *** Ensure data retrieval from localStorage doesn’t degrade page load speed

*** Test Steps: ***

- Populate localStorage with pickup requests, user data
- Reload dashboard and scheduling page

*** Expected Result: *** Pages load within 3 seconds; stored data is rendered instantly
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** High

🧮 TC-PERF-LS-002: Stress Testing localStorage Limits

*** Objective: *** Determine app stability when localStorage nears capacity

*** Test Steps: ***

- Create hundreds of pickup requests or feed entries
- Confirm data persistence and UI responsiveness

*** Expected Result: *** App doesn’t crash or freeze; alerts shown if storage is full
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: ***: Medium

🔒 Security Test Cases (LocalStorage Constraints)

🛡️ TC-SEC-LS-001: Validate Input Sanitization for localStorage Writes

*** Objective: *** Prevent malicious content injection when writing to localStorage

*** Test Steps: ***

- Add <script> tags or SQL-like inputs to form fields
- Save data to localStorage

*** Expected Result: *** Input is sanitized; data stored as plain text without executable scripts
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** Critical

🧨 TC-SEC-LS-002: Check Exposure of Sensitive Data in DevTools

*** Objective: *** Ensure sensitive session/user data isn't stored in localStorage

*** Test Steps: ***

- Login and inspect localStorage via DevTools
- Look for access tokens, emails, passwords

*** Expected Result: *** No sensitive data stored; only non-critical info retained
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** Critical



🙂 Usability Test Cases (LocalStorage-Enhanced UX)

✨ TC-USABILITY-LS-001: Retain User Progress Across Sessions

*** Objective: *** Confirm partial form inputs persist using localStorage

*** Test Steps: ***

- Start filling out a request or feedback form
- Refresh page or close browser
- Reopen app

*** Expected Result: *** Previously entered data restored from localStorage
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** Medium


🧩 TC-USABILITY-LS-002: localStorage Sync Consistency

*** Objective: *** Validate UI consistently reflects data stored locally

*** Test Steps: ***

- Save or update pickup request
- Navigate to another section and return

*** Expected Result: *** Data rendered accurately every time; no mismatch
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** Low

Accessibility (WCAG 2.1) – Test Cases

🧏 TC-ACCESS-001: Screen Reader Compatibility

*** Objective: *** Verify screen readers can accurately interpret and navigate page content

*** Test Steps: ***

- Open app using NVDA, JAWS, or VoiceOver
- Navigate all key pages: dashboard, forms, blog, feed
- Check label reading and content flow

*** Expected Result: *** All elements are read in logical order with meaningful labels
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** Critical

🎹 TC-ACCESS-002: Keyboard Navigation Support

*** Objective: *** Confirm keyboard-only users can fully interact with the app

*** Test Steps: ***

- Use Tab, Shift+Tab, Enter, Arrow keys to move through UI
- Focus on forms, menus, modals, and dashboard cards

*** Expected Result: *** Logical tab flow, visible focus indicators, all actions accessible without mouse
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** High

🎨 TC-ACCESS-003: Contrast Ratio Compliance

*** Objective: *** Ensure text and UI elements meet WCAG AA (4.5:1) or AAA contrast ratios

*** Test Steps: ***

- Use accessibility checker (e.g., Axe, WAVE)
- Scan text, buttons, icons, input fields

*** Expected Result: *** All interactive elements pass contrast requirements
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** High

🖼️ TC-ACCESS-004: Alt Text for Images and Icons

*** Objective: *** Validate descriptive alt text is present for images and icons

*** Test Steps: ***

- Inspect blog posts, feed, dashboard icons
- Hover or use screen reader to detect alt attribute

*** Expected Result: *** All images have meaningful alt descriptions or role="presentation" where decorative
*** Actual Result: *** Pending
*** Status: *** Pending
*** Severity/Priority: *** Medium

## 🌐 Cross-Browser Compatibility – Test Cases

| Test Case ID   | Browser    | Platforms        | Description                                          | Expected Result                   | Severity/Priority |
|----------------|------------|------------------|------------------------------------------------------|-----------------------------------|-------------------|
| TC-CROSS-001   | Chrome     | Windows, Android | Load all pages and validate styling, functionality   | Smooth performance across devices | High              |
| TC-CROSS-002   | Firefox    | Windows, macOS   | Test form inputs, dashboard, blog, feed              | Forms submit and render correctly | Medium            |
| TC-CROSS-003   | Safari     | iOS, macOS       | Ensure layout and navigation work on mobile Safari   | Responsive design adapts properly | High              |
| TC-CROSS-004   | Edge       | Windows          | Test localStorage retrieval and UI responsiveness    | Data persists and UI loads cleanly| Medium            |
| TC-CROSS-005   | Opera      | Windows, Linux   | Check navigation and content rendering               | No layout breaks or script errors | Medium            |

