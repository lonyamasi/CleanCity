#  CleanCity QA Test Plan   
**Prepared By**: Bug Slayhers 
**Testing Period**: July 1–16, 2025  

---

##  1. Test Objectives
 Do thorough testing to the web app- Clean City and ensure:  
- The app is compliant with functional requirements (FR-001 to FR-097)  
- The app is responsive, and compatible across different platforms  
- Ensure there is data security, business rule adherence, and proper error handling  
- Identify, categorize, and document all functional and non-functional defects. 

---

##  2. Test Scope  

###  In Scope 
 Testing will cover functional aspects like:
- Authentication & Role-Based Access  
- Waste Scheduling, Tracking, and Management  
- User Dashboard, rewards,and rankings  
- Blog, Community Interactions, Content Moderation  
- Help System and Activity Logging 

-Nonfunctional aspects:

###  Out of Scope 
Testing will exclude: 
- Backend database (handled via localStorage only)  
- 3rd-party integration (e.g., payment or APIs)  

---

##  3. Entry and Exit Criteria  

### Entry Criteria  
- Deployed CleanCity build accessible via Netlify  
- Test plan, test data, and environment prepared  
- Approved Functional requirement documentation and UI flows available.  

### Exit Criteria  
- All high/critical defects closed or accepted with risk  
- Test execution completed and reports submitted  
- 5-minute presentation video finalized  

---

## 4. Testing Schedule  

| Phase                                | Dates                | Activities                                          |
|--------------------------------------|--------------- ------|-----------------------------------------------------|
| Tests Planning                       | June 27– July 1      | Repo setup, test plan, preparing environments       |
| Tests Design/case creations          | July 3–4             | Test cases, test data scenarios tested              |
| Tests Execution                      | July 5–12            | Full test cycles, bugs logged                       |
| Defect Analysis/Reporting            | July 12–15           | Retests, defect closure, summary report             |
| Final Presentation                   | July 16              | Deliver 5-min video + final report                  |


## 5. Testing Strategy 

### Phase 1: Test Planning 

### Test Strategy Development
- Define testing scope and objectives  
- Identify test environments and tools  
- Create test data requirements  
- Establish defect reporting standards  
- **Jira Setup:** Create project, configure workflows  

### Test Environment Setup
- Browser compatibility matrix (Chrome, Firefox, Safari, Edge)  
- Device testing (Desktop, Tablet, Mobile)  
- Network conditions (3G, 4G, WiFi)  
- Accessibility testing tools  

---

### Phase 2: Test Design 

### Test Case Development
- Functional test cases for all features  
- Non-functional test cases (Performance, Security, Usability)  
- Accessibility test cases (WCAG 2.1 compliance)  
- Cross-browser compatibility test cases  
- **Jira Tasks:** Create stories for each testing area  

### Test Data Preparation
- User accounts (regular users, admins)  
- Sample content (blog posts, community posts)  
- Test scenarios for edge cases  

---

### Phase 3: Test Execution 

### Functional Testing
- User registration and authentication flows  
- Waste pickup scheduling and management  
- Blog and community features  
- Admin panel functionality  
- Form validation and error handling  
- **Jira Updates:** Log all testing activities and findings  

### Non-Functional Testing
- Performance testing (load times, responsiveness)  
- Security testing (data validation, XSS prevention)  
- Usability testing (user experience, navigation)  
- Accessibility testing (screen readers, keyboard navigation)  

### Compatibility Testing
- Cross-browser testing  
- Responsive design validation  
- Mobile device testing  

---

### Phase 4: Test Closure 

### Defect Analysis and Reporting
- Categorize and prioritize defects  
- Create detailed bug reports in Jira  
- Provide recommendations for improvements  
- **Jira Reports:** Generate defect summary reports  

### Test Metrics and Documentation
- Test execution summary  
- Defect density analysis  
- Risk assessment  

---


##  6. Test Case Format  

Each test case will include:  
- **Test Case ID & Title**  
- **Objective**   
- **Test Steps**  
- **Expected Result**  
- **Actual Result**  
- **Status (Pass/Fail)**  
- **Severity/Priority (if failed)**  
- **Attachments (screenshots, logs)**  

---

## 7. Risk Management  


### Risk-Based Testing

| Test Area                                   | Likelihood | Impact   | Priority     | Mitigation Strategy                                           |
|---------------------------------------------|------------|----------|--------------|---------------------------------------------------------------|
| **User Authentication** (Reg/Login/Reset)   | High       | High     | **Critical** |                                                               |
| **Waste Management** (Schedule/Cancel)      | High       | High     | **Critical** |                                                               |
| **Admin Functions** (Moderation/Management) | Medium     | High     | **High**     |                                                               |
| **Content Features** (Blog/Comments)        | Medium     | Medium   | **Medium**   |                                                               |
| **Data Persistence** (localStorage)         | High       | Medium   | **High**     | **State Transition Testing**                                  |
| **Form Validation** (Inputs/Errors)         | High       | Medium   | **High**     |  **Boundary Value Analysis** and **Equivalence Partitioning** |
| **Performance** (Speed/Responsiveness)      | Medium     | High     | **High**     |                                                               |
| **Usability** (Navigation/UI Design)        | Medium     | Medium   | **Medium**   |  **Exploratory Testing**, **Checklist-Based Testing**         |
| **Accessibility** (WCAG/Screen Readers)     | Low        | High     | **High**     | using WCAG 2.1 guidelines and tools like Axe.                 |
| **Security** (Sanitization/Sessions)        | High       | Critical | **Critical** | Perform **Static Analysis**  to detect XSS and session issues.|
| **Compatibility** (Browser/Device)          | Medium     | Medium   | **Medium**   | Apply **Configuration Testing** across devices.               |
| **Intentional Flaws** (Bug Injection)       | High       | Medium   | **High**     | Use **Exploratory Testing** to                                |
| **Edge Cases** (Boundaries/Unexpected Input)| High       | Medium   | **High**     |                                                               |
| **User Experience** (Workflow/UI Flow)      | Medium     | Medium   | **Medium**   |                                                               |
| **Data Integrity** (Consistency/Reliability)| Medium     | High     | **High**     | Apply **State Transition Testing**                            |


---



## 8. Metrics for Evaluation  

| Metric                         | Goal       |
|--------------------------------|----------  |
| Test Case Coverage             | ≥ 95%      |
| Critical Bugs Fixed            | 100%       |
| Defect Detection Effectiveness | ≥ 85%      |
| Avg. Bug Resolution Time       | < 24 hrs   |
| Accessibility Failures         | 0 Blockers |

---



## 9. References  

- [Functional Requirements Specification](../docs/frs.md)  
- [Roles & Responsibilities](../docs/roles_responsibilities.md)  
- [Environment Setup](../scripts/env_setup.md)

---

