const express = require("express");

const router = express.Router();

const {
    createPremium,
    getPremiums,
    getPremiumById,
    updatePremium,
    deletePremium
} = require("../controllers/premium.controller");

router.post("/premium", createPremium);

router.get("/premium", getPremiums);

router.get("/premium/:id", getPremiumById);

router.put("/premium/:id", updatePremium);

router.delete("/premium/:id", deletePremium);

module.exports = router;