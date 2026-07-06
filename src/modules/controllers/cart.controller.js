const Cart = require("../schemas/cart.schema");

// CREATE
const createCart = async (req, res) => {
    try {

        const cart = await Cart.create(req.body);

        res.status(201).json({
            message: "Cart created successfully",
            cart
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// GET ALL
const getCarts = async (req, res) => {
    try {

        const carts = await Cart.find()
            .populate("userId")
            .populate("items.bookId");

        res.json(carts);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// GET BY ID
const getCartById = async (req, res) => {
    try {

        const cart = await Cart.findById(req.params.id)
            .populate("userId")
            .populate("items.bookId");

        if (!cart)
            return res.status(404).json({
                message: "Cart not found"
            });

        res.json(cart);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// UPDATE
const updateCart = async (req, res) => {
    try {

        const cart = await Cart.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!cart)
            return res.status(404).json({
                message: "Cart not found"
            });

        res.json({
            message: "Cart updated successfully",
            cart
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// DELETE
const deleteCart = async (req, res) => {
    try {

        const cart = await Cart.findByIdAndDelete(req.params.id);

        if (!cart)
            return res.status(404).json({
                message: "Cart not found"
            });

        res.json({
            message: "Cart deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    createCart,
    getCarts,
    getCartById,
    updateCart,
    deleteCart
};