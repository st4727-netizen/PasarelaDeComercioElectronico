const express = require("express");

const router = express.Router();

const {
    createReport,
    getReports,
    getReportById,
    updateReport,
    deleteReport
} = require("../controllers/report.controller");

router.post("/report", createReport);

router.get("/report", getReports);

router.get("/report/:id", getReportById);

router.put("/report/:id", updateReport);

router.delete("/report/:id", deleteReport);

module.exports = router;