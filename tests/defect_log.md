
#  CleanCity – Defect Log Entry


 Defect Log Format  

Each defect log will include:  
- **Defect log ID & Title**  
- **Related Test Case**
- **Description** 
- **Test Steps**  
- **Expected Result**  
- **Actual Result**  
- **Severity**  
- **Priority**  

---

## DF: Waste Management
### DFL-1: Main Operations around waste pickup and handling
### DFL-1.1: Application accepts past dates and even last year for waste pickup scheduling
**Related Test Case**: TC-2.1 **Validate date must be at least 24h in future**  

### Description  
The waste pickup form allows users to select and submit a preferred pickup date that is in the past, including last year, which is illogical for future service requests.

### Steps to Reproduce  

1. Login as user Jay  
2. Submit a pickup request with:  
   - Location: Eldoret
   - Waste Type: Recyclable
   - Date: 2024-06-01  
3. Submit the request  
   

### Expected Result  
System should reject past dates with an error message as date input should be restricted to selection of today and the future.

### Actual Result  
System accepts and stores past dates like 2024-01-06 there are no restrictions on date picker or validation logic.

### Evidence  
[DFL-1.1](https://github.com/user-attachments/assets/0dc4bc87-0fd0-4fd8-bd1a-e98ff79644dd)


### Severity/Priority  
- **Severity**: Major  
- **Priority**: High  

---

### DFL-1.2: Duplicate pickup requests allowed for the same user, location, and date
**Related Test Case**: TC-2.2**Duplicate Pickup Requests for Same User, Date, and Location**

### Description  
The system permits multiple identical waste pickup requests from the same user for the same date and location, leading to possible overbooking and logistical errors.

### Steps to Reproduce  

1. Login as user Jay  
2. Submit a pickup request with:  
   - Location: Eldoret  
   - Date: 2024-06-01  
3. Submit another identical request  
4. Check the request list or dashboard for duplicates  

### Expected Result  
System should block the second request and alert the user that a request already exists for that date, location, and user.

### Actual Result  
System accepts the duplicate request and assigns it a new request ID.

### Evidence  
[DFL-1.2](https://github.com/user-attachments/assets/a6bf301a-32f5-470b-82ec-2b4aa3f330bc)

### Severity/Priority  
- **Severity**: Major  
- **Priority**: Medium  

---

### DFL-1.3: User cannot Modify or Cancel Pickup Requests
**Related Test Case**: TC-2.3 **Manage Pickup Requests (Modify & Cancel)**

### Description  
The dashboard interface does not provide any options (buttons, links, or forms) for users to update or cancel pickup requests. This restricts the user from correcting mistakes (such as wrong date or location) or cancelling requests they no longer need. This directly affects user experience and system flexibility.

### Steps to Reproduce  

1. Log in as Clara.
2. Submit a pickup request with:  
   - Location: Eldoret  
   - Date: 2025-08-09 
3. Navigate to the Dashboard.
4. Try to modify or cancel the request.  

### Expected Result  
System lacks "Edit" button to update request details and "Cancel" button to delete pending requests.

### Actual Result  
System has no "Edit" button to modify request and has no "Cancel" button to delete the request.

### Evidence  
[DFL-1.3](https://github.com/user-attachments/assets/e4915a4d-d169-4c49-8e43-d80c03e635d9)

### Severity/Priority  
- **Severity**: Critical 
- **Priority**: High  

---

### DFL-1.4: No progress indicator or visual status tracking on the user dashboard
**Related Test Case**: TC-2.4 **Track Requests Progress**

### Description  
The dashboard shows only plain status text ("Pending", "Scheduled"), without progress bars or timeline indicators. This reduces clarity for the user on the request status.

### Steps to Reproduce  

1. Log in as Clara
2. Submit a pickup request
3. Admin changes the request status to “Scheduled”.
4. Refresh Dashboard - Status text updates  

### Expected Result  
Progress indicator on user interface

### Actual Result  
The Admin gets an alert that status is updated but the user gets plain text status (“Scheduled”) only.

### Evidence  
[DFL-1.4](https://github.com/user-attachments/assets/23876cfc-acbc-4381-a920-61d4f43ff144)

### Severity/Priority  
- **Severity**: Minor  
- **Priority**: Medium

---

## DF 2: Dashboard and analytics
### DFL-2.1: User Dashboard & Gamification Not Updating After User Activities
**Related Test Case**: TC-3.1 

### Description  
The user dashboard does not reflect any updates after completing key user actions such as requesting pickups, completing quizzes, or posting blog. Only the community feed participation count reflects correctly. This affects overall user experience and makes gamification and tracking features unusable.

### Steps to Reproduce  

- Log in with a test user.

- Submit a pickup request.

- Complete a quiz.

- Post in the community feed.

- Open dashboard. 
   

### Expected Result  
All activities reflected; dashboard updates points, badges, quizzes, pickups.

### Actual Result  
Only community post count updates.



### Severity/Priority  
- **Severity**: Major  
- **Priority**: Medium  


### DFL-2.2: Dashboard Accessible Without Login
**Related Test Case**: TC-3.3 

### Description  
The dashboard as of now is accessible to anyone with a valid email even without registering or logging in.

### Steps to Reproduce  

- Click on home page without logging in.

- Click on dashboard as a random user.

- Input a random email that isn’t a registered user; ray@gmail.com then password.

- Login
   

### Expected Result  
Error message indicating the user is not authenticated/invalid user.

### Actual Result  
Dashboard accessible and creates new account.




### Severity/Priority  
- **Severity**: Critical  
- **Priority**: Highest  


### DFL-2.3: Visual Analytics Not Displaying Data
**Related Test Case: TC-3.2**
**Description**
The dashboard analytics section does not show the activities of the user. Despite users performing actions like posting in the community feed or scheduling pickups, the analytics do not update to reflect these actions. Additionally, the export feature is unavailable, making it difficult to analyze or retain activity records.

**Steps to Reproduce**
- Login as a new user.

- Post blogs, schedule pickups, and post in the community feed.

- Navigate to the dashboard analytics section.

- Attempt to export analytics data.

**Expected Result**
Visual analytics should show up-to-date user activities in chart format. Charts should display data such as most active users, completed pickups, posts, and blog trends. An export option (CSV/PDF) should be available and functional.

**Actual Result**
Analytics section does not show updated data, despite completed user actions. Export functionality is missing or inaccessible.


**Severity/Priority**
**Severity**: major

**Priority**: Medium



### DFL-2.4: Pickup and Scheduled Requests Not Displayed
**Related Test Case**: TC-3.4

### Description  
User is not able to view, edit or cancel their scheduled requests, whether recent or history.

### Steps to Reproduce  

- Click on the schedule pickup as newuser.

- Input your name, email and details of the waste.

- Set the preferred date, should not be in past and submit request.

- Check on profile button then my requests button to view the scheduled requests status.
   

### Expected Result  
On submitting, user should be able to check my requests to see the requests status

### Actual Result  
My requests on users profile shows No waste pickup requests yet.


### Severity/Priority  
- **Severity**: Critical  
- **Priority**: High 

---

### DFL-3: Navigation Bar Overlaps Content on Mobile Devices
**Related Test Case**: NFTC-002 - **Responsive Design**

### Description  
On screen widths below **750px**, the navigation bar does not collapse, causing it to overlap main page content. This makes the application unusable on mobile devices, particularly at common breakpoints like **375px** (iPhone) and **414px** (large phones).

### Steps to Reproduce  

1. Open the website on Chrome DevTools using the Device Toggle icon(responsive mode).

2. Test screen widths from **320px to 1440px** manually adjusting the width.

3. Observe how navigation and content behave at key breakpoints:

   * 320px (small phones)
   * 375px (iPhones)
   * 414px (larger phones)
   * 768px (tablets)
   * 1024px+ (laptops/desktops)  

### Expected Result  
Navigation bar should collapse or reposition (use of hamburger menu) to fit the smaller screen without overlapping or hiding the content.

### Actual Result  
The navigation bar remains in full width and overlaps the main content, preventing interaction and readability on screen widths below 750px.

### Evidence  
[DFL-3](CleanCity/tests/Evidence/Responsiveness.mp4)

### Severity/Priority  
- **Severity**: High  
- **Priority**: Medium

---

### DFL-3: Low Contrast and Inconsistent Font Usage
**Related Test Case**: NFTC-5 - **Font Readability and Color Contrast Compliance**

### Description  
The application uses foreground text colors (ash gray) on white backgrounds that fail WCAG 2.1 contrast requirements also inconsistent use of Segoe UI, Arial,Monospace and cursive bold fonts across sections impacts readability and visual consistency for users with low vision.

### Steps to Reproduce  

- Load the website.

- Use Chrome Dev Tools-> Lighthouse-> Accessibility to test contrast ratios between text and background.

- Examine font sizes and font styles used across headings, buttons, labels, and body text using Fonts Ninja.

- Identify any inconsistent or low-contrast color usage affecting readability.

### Expected Result  
All text should meet at least 4.5:1 contrast ratio for normal text, 3:1 for bold text, the minimum font size should be 14px for optimal readability,the used font should be constant all through.

### Actual Result  
- Text appears in various colors including light greenish, ash gray, dark blue, and black.

- The light greenish and ash gray text fail contrast requirements against the white background (contrast ratio < 4.5:1).

- Some UI text (placeholders-> 1 of 3) uses a 12px font size, which may cause readability issues, especially for users with low vision.

- Font families include Segoe UI, Arial, Monospace and cursive bold, creating inconsistency across UI sections.

### Evidence  
[DFL-4.1](CleanCity/tests/Evidence/Usability.mp4)
[DFL-4.2](CleanCity/tests/Evidence/Fonts-usability.mp4)

### Severity/Priority  
- **Severity**: Medium  
- **Priority**: Medium

---

