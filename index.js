require("dotenv").config();

const express = require("express");
const connectDB = require("./src/config/db");

const app = express();

const PORT = process.env.PORT || 5100;

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API Librería funcionando");
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});