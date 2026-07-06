const Book = require("../schemas/book.schema");

// CREATE
const createBook = async (req, res) => {
    try {

        const book = await Book.create(req.body);

        res.status(201).json({
            message: "Book created successfully",
            book
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// GET ALL
const getBooks = async (req, res) => {
    try {

        const books = await Book.find();

        res.json(books);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// GET BY ID
const getBookById = async (req, res) => {
    try {

        const book = await Book.findById(req.params.id);

        if (!book)
            return res.status(404).json({
                message: "Book not found"
            });

        res.json(book);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// UPDATE
const updateBook = async (req, res) => {
    try {

        const book = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!book)
            return res.status(404).json({
                message: "Book not found"
            });

        res.json({
            message: "Book updated successfully",
            book
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// DELETE
const deleteBook = async (req, res) => {
    try {

        const book = await Book.findByIdAndDelete(req.params.id);

        if (!book)
            return res.status(404).json({
                message: "Book not found"
            });

        res.json({
            message: "Book deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
};