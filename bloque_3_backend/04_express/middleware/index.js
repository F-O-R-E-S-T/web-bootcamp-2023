const errorLogger = (error, req, res, next) => {
  console.error(`[SERVER ERROR]: ${error}`);
  next(error);
};

const errorHandler = (error, req, res, next) => {
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
};

module.exports = {
  errorLogger,
  errorHandler,
};
