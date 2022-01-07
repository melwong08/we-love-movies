function methodNotAllowed(req, res, next) {
  console.log("methodnotallowed", req.body)  
  next({
      status: 405,
      message: `${req.method} not allowed for ${req.originalUrl}`,
    });
  }
  
  module.exports = methodNotAllowed;