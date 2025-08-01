// User Model & Routes

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true},
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true},
  //phoneNumber: { type: String, required: true },
  role: { type: String,enum: ['tenant', 'agent'], default: 'tenant' }
});

module.exports = mongoose.model('User', userSchema);