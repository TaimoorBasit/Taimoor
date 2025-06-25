const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    enum: ['frontend', 'backend', 'database', 'mobile', 'devops', 'other'],
    required: true
  },
  proficiency: {
    type: Number,
    min: 1,
    max: 100,
    default: 50
  },
  icon: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: '#ff7e5f'
  },
  order: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Skill', skillSchema); 