const notFound = (req, res, next) => {
  try {
    const error = new Error(`Not Found: ${req.originalUrl}`);
    res.status(404).json({ error: error.message });
  } catch (e) {
    next(e);
  }
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: err.stack,
  });
};

module.exports = { notFound, errorHandler };
