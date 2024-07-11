
exports.errorhandler = (err, req, res, next) => {
  res.status(err.status || 500).send({
    msg: "Something went wrong",
    err: err.message,
    name: err.name,
    code: err.code,
    stack: err.stack,
  });
};
