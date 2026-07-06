require("dotenv").config();

const express = require("express");
const connectDB = require("./src/config/db");

const userRoutes = require("./src/modules/routes/user.routes");
const bookRoutes = require("./src/modules/routes/book.routes");
const cartRoutes = require("./src/modules/routes/cart.routes");
const orderRoutes = require("./src/modules/routes/order.routes");
const paymentRoutes = require("./src/modules/routes/payment.routes");
const premiumRoutes = require("./src/modules/routes/premium.routes");
const reportRoutes = require("./src/modules/routes/report.routes");

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.json({
        message: "Library API is running successfully"
    });
});

// ROUTES

app.use("/api/users", userRoutes);

app.use("/api/books", bookRoutes);

app.use("/api/carts", cartRoutes);

app.use("/api/orders", orderRoutes);

app.use("/api/payments", paymentRoutes);

app.use("/api/premiums", premiumRoutes);

app.use("/api/reports", reportRoutes);

const PORT = process.env.PORT || 5100;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});