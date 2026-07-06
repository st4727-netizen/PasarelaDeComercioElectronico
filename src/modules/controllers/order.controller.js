const Order = require("../schemas/order.schema");

// CREATE
const createOrder = async (req, res) => {
    try {

        const order = await Order.create(req.body);

        res.status(201).json({
            message: "Order created successfully",
            order
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// GET ALL
const getOrders = async (req, res) => {
    try {

        const orders = await Order.find()
            .populate("userId")
            .populate("items.bookId");

        res.json(orders);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// GET BY ID
const getOrderById = async (req, res) => {
    try {

        const order = await Order.findById(req.params.id)
            .populate("userId")
            .populate("items.bookId");

        if (!order)
            return res.status(404).json({
                message: "Order not found"
            });

        res.json(order);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// UPDATE
const updateOrder = async (req, res) => {
    try {

        const order = await Order.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!order)
            return res.status(404).json({
                message: "Order not found"
            });

        res.json({
            message: "Order updated successfully",
            order
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// DELETE
const deleteOrder = async (req, res) => {
    try {

        const order = await Order.findByIdAndDelete(req.params.id);

        if (!order)
            return res.status(404).json({
                message: "Order not found"
            });

        res.json({
            message: "Order deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    createOrder,
    getOrders,
    getOrderById,
    updateOrder,
    deleteOrder
};