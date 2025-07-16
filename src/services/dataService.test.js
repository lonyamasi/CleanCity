import dataService from './dataService';

// Data is saved and retrieved from localStorage correctly
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


test('handles corrupted JSON in storage', () => {
  localStorage.setItem('cleancity_pickup_requests', 'invalid json');
  const result = dataService.getAllPickupRequests();
  expect(result).toEqual([]); // Fallback to empty array
});

//emailuniqueness test
test('rejects duplicate users by email', () => {
  dataService.clearAllData();
  const user = {
    id: '99',
    name: 'Duplicate User',
    email: 'duplicate@cleancity.com',
    password: 'pass123',
    role: 'user',
    createdAt: new Date().toISOString()
  };
  expect(dataService.addUser(user)).toBe(true);  // first insert
  expect(dataService.addUser(user)).toBe(false); // duplicate insert
});

//authentication and role test
test('checks admin role and authentication status', () => {
  const admin = { id: '2', role: 'admin' };
  localStorage.setItem('currentUser', JSON.stringify(admin));
  expect(dataService.isAuthenticated()).toBe(true);
  expect(dataService.isAdmin()).toBe(true);
});
