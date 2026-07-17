const jwt = require("jsonwebtoken");
const { APP_SECRET } = require("../config/appToken");

const validateAppToken = (req, res, next) => {

    const token = req.header("app-token");

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Application token is required."
        });
    }

    try {

        jwt.verify(token, APP_SECRET);

        next();

    } catch (error) {

        return res.status(401).json({
            success: false,
            message: "Invalid application token."
        });

    }

};

module.exports = validateAppToken;