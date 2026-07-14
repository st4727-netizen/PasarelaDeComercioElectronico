const express = require("express");
const router = express.Router();

const {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
} = require("../controllers/book.controller");

router.post("/book", createBook);

router.get("/book", getBooks);

router.get("/book/:id", getBookById);

router.put("/book/:id", updateBook);

router.delete("/book/:id", deleteBook);

module.exports = router;