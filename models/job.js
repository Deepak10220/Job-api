const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  company: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    default: 0,
  },
});

const jobs = mongoose.model("job", jobSchema);
module.exports = jobs;
