const Report = require("../schemas/report.schema");

// CREATE
const createReport = async (req, res) => {
    try {

        const report = await Report.create(req.body);

        res.status(201).json({
            message: "Report created successfully",
            report
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// GET ALL
const getReports = async (req, res) => {
    try {

        const reports = await Report.find();

        res.json(reports);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// GET BY ID
const getReportById = async (req, res) => {
    try {

        const report = await Report.findById(req.params.id);

        if (!report)
            return res.status(404).json({
                message: "Report not found"
            });

        res.json(report);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// UPDATE
const updateReport = async (req, res) => {
    try {

        const report = await Report.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!report)
            return res.status(404).json({
                message: "Report not found"
            });

        res.json({
            message: "Report updated successfully",
            report
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// DELETE
const deleteReport = async (req, res) => {
    try {

        const report = await Report.findByIdAndDelete(req.params.id);

        if (!report)
            return res.status(404).json({
                message: "Report not found"
            });

        res.json({
            message: "Report deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    createReport,
    getReports,
    getReportById,
    updateReport,
    deleteReport
};