const mongoose = require('mongoose');
const User = require('../models/User');

exports.getUserById = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid user ID format' });
  }

  try {
    const user = await User.findOne({ _id: id, age: { $gt: 21 } });
    if (!user) {
      return res.status(404).json({ error: 'User not found or under age' });
    }
    res.json(user);
  } catch (err) {
    next(err);
  }
};