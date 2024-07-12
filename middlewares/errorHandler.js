
exports.errorhandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  // res.statusCode || 500
  // err.code
  let message = statusCode === 500 ? "Something went wrong" :  err.message;
  res.status(statusCode).send({
    msg: message,
    error: err.name,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
