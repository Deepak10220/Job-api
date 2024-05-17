const jobModel = require("../models/job");
const createJob = async (req, res) => {
  try {
    const jobObj = req.body;
    const newJob = new jobModel(jobObj);
    const savedJob = await newJob.save();
    res.status(200).json(savedJob);
  } catch (error) {
    res.status(404).json({ error: "Invalid Path" });
  }
};
const getJob = async (req, res) => {
  try {
    const jobsList = await jobModel.find();
    res.status(200).json(jobsList);
  } catch (error) {
    res.status(404).json({ error: "Invalid Path" });
  }
};
const updateJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const updateJobId = req.body;
    const response = await jobModel.findByIdAndUpdate(jobId, updateJobId, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ err: "Invalid Data" });
  }
};
const deleteJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const response = await jobModel.findByIdAndDelete(jobId);
    res.status(200).json({message : 'job deleted successfully'})
  } catch (error) {
    res.status(500).json({ err: "Invalid Data" });
  }
};
const jobcontroller = {
  createJob,
  getJob,
  updateJob,
  deleteJob,
};
module.exports = jobcontroller;
