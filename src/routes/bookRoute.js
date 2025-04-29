const express = require("express");
const router = express.Router();

const BookRepository = require("../database/repositories/BookRepository");
const BookService = require("../services/BookService");
const BookController = require("../controllers/BookController");

const bookRepository = new BookRepository();
const bookService = new BookService(bookRepository);
const bookController = new BookController(bookService);

router
  .get("/", bookController.findAllBooks)
  .get("/search", bookController.findBooksByFilter)
  .get("/:bookId", bookController.findBookById)
  .post("/", bookController.createBook)
  .put("/:bookId", bookController.updateBook)
  .delete("/:bookId", bookController.deleteBook);

module.exports = router;
