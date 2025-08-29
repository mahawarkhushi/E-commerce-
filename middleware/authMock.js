// middleware/authMock.js
// Simple middleware to make cart user-specific without full auth.
// Reads x-user-id header if provided; otherwise injects a default demo user id.
// This keeps APIs user-specific and testable by recruiter.

module.exports = (req, res, next) => {
  // Allow tester to pass a user id via header: x-user-id
  const headerUser = req.header('x-user-id');
  if (headerUser && headerUser.trim() !== '') {
    req.user = { id: headerUser };
  } else {
    // default mock user id for demo/testing
    req.user = { id: 'demo-user-1' };
  }
  next();
};