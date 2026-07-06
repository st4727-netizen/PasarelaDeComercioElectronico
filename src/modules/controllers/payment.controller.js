const Payment = require("../schemas/payment.schema");

// CREATE
const createPayment = async (req, res) => {
    try {

        const payment = await Payment.create(req.body);

        res.status(201).json({
            message: "Payment created successfully",
            payment
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// GET ALL
const getPayments = async (req, res) => {
    try {

        const payments = await Payment.find()
            .populate("orderId");

        res.json(payments);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// GET BY ID
const getPaymentById = async (req, res) => {
    try {

        const payment = await Payment.findById(req.params.id)
            .populate("orderId");

        if (!payment)
            return res.status(404).json({
                message: "Payment not found"
            });

        res.json(payment);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// UPDATE
const updatePayment = async (req, res) => {
    try {

        const payment = await Payment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!payment)
            return res.status(404).json({
                message: "Payment not found"
            });

        res.json({
            message: "Payment updated successfully",
            payment
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// DELETE
const deletePayment = async (req, res) => {
    try {

        const payment = await Payment.findByIdAndDelete(req.params.id);

        if (!payment)
            return res.status(404).json({
                message: "Payment not found"
            });

        res.json({
            message: "Payment deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    createPayment,
    getPayments,
    getPaymentById,
    updatePayment,
    deletePayment
};