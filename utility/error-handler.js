const errorHandler = (req, res) => (err) => {
  console.log(err);
  res.status(500).json({
    message: 'error occured',
    error: err,
  });
};

module.exports = errorHandler;
