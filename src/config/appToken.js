const jwt = require("jsonwebtoken");

const APP_SECRET = "library_application_secret_key";

const generateAppToken = () => {
    return jwt.sign(
        {
            app: "LibraryAPI",
            permissions: "full-access"
        },
        APP_SECRET,
        {
            expiresIn: "365d"
        }
    );
};

module.exports = {
    APP_SECRET,
    generateAppToken
};