module.exports = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(
      { statusCode: 400, message: 'Some required fields are missing' },
    ); 
  }
  res.status(200).send('entrei');
};