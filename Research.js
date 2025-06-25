const mongoose = require('mongoose');

const researchSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  abstract: {
    type: String,
    required: true
  },
  authors: [{
    type: String,
    trim: true
  }],
  publicationDate: {
    type: Date,
    required: true
  },
  journal: {
    type: String,
    trim: true
  },
  doi: {
    type: String,
    trim: true
  },
  keywords: [{
    type: String,
    trim: true
  }],
  pdf: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  featured: {
    type: Boolean,
    default: false
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

module.exports = mongoose.model('Research', researchSchema); 