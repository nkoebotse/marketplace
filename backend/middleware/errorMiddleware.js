// errorMiddleware.js

// Custom error handler middleware
// This middleware handles errors occurring in the application
// and formats the error response to be more readable and consistent.
const errorHandler = (err, req, res, next) => {
    // If the status code is 200, set it to 500 (internal server error)
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    
    // Set response status to the status code
    res.status(statusCode);
    
    // Return a JSON response with error details
    res.json({
      message: err.message,
      // Show stack trace only in development mode
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
  };
  
  // 404 Not Found Middleware
  // This middleware catches requests to non-existent routes and returns a 404 error.
  const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
  };
  
  module.exports = { errorHandler, notFound };
  