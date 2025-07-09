
#  CleanCity – # Defect Log Entry


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
System allows a user to submit multiple identical pickup requests with the same user, location, and date. This can result in overbooking or misallocated resources in the pickup schedule.

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
[DFL-1.1](https://github.com/user-attachments/assets/67d9637a-7cf5-4d9c-90d2-e03dd0a4b872)


### Severity/Priority  
- **Severity**: Major  
- **Priority**: Medium  

---


