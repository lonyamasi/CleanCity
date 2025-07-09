
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
**Related Test Case**: TC-2.2 **Duplicate Pickup Requests for Same User, Date, and Location**

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
- **Severity**: Major  
- **Priority**: High  

---

