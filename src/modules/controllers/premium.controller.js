const Premium = require("../schemas/premium.schema");

// CREATE
const createPremium = async (req, res) => {
    try {

        const premium = await Premium.create(req.body);

        res.status(201).json({
            message: "Premium membership created successfully",
            premium
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// GET ALL
const getPremiums = async (req, res) => {
    try {

        const premiums = await Premium.find()
            .populate("userId");

        res.json(premiums);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// GET BY ID
const getPremiumById = async (req, res) => {
    try {

        const premium = await Premium.findById(req.params.id)
            .populate("userId");

        if (!premium)
            return res.status(404).json({
                message: "Premium membership not found"
            });

        res.json(premium);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// UPDATE
const updatePremium = async (req, res) => {
    try {

        const premium = await Premium.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!premium)
            return res.status(404).json({
                message: "Premium membership not found"
            });

        res.json({
            message: "Premium membership updated successfully",
            premium
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// DELETE
const deletePremium = async (req, res) => {
    try {

        const premium = await Premium.findByIdAndDelete(req.params.id);

        if (!premium)
            return res.status(404).json({
                message: "Premium membership not found"
            });

        res.json({
            message: "Premium membership deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    createPremium,
    getPremiums,
    getPremiumById,
    updatePremium,
    deletePremium
};