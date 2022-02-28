const indexCtrl = {};

const User = require('../models/User');

indexCtrl.createUser = async (req, res) => {
  const { username, email } = req.body;
  const newUser = new User({
    username,
    email,
  });
  await newUser.save();
  res.json('User created');
};

indexCtrl.listUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

module.exports = indexCtrl;
