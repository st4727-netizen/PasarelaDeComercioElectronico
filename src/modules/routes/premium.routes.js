const express = require("express");

const router = express.Router();

const {
    createPremium,
    getPremiums,
    getPremiumById,
    updatePremium,
    deletePremium
} = require("../controllers/premium.controller");

router.post("/", createPremium);

router.get("/", getPremiums);

router.get("/:id", getPremiumById);

router.put("/:id", updatePremium);

router.delete("/:id", deletePremium);

module.exports = router;