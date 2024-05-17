const express = require('express')
const router = express.Router();
const jobcontroller = require('../controllers/job')

router.post("/api/jobs" , jobcontroller.createJob);
router.get("/api/jobs" ,jobcontroller.getJob);
router.put("/api/jobs/:id" ,jobcontroller.updateJob);
router.delete("/api/jobs/:id" ,jobcontroller.deleteJob);

module.exports = router;
