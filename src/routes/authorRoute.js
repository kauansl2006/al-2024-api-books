const express = require("express");
const router = express.Router();

const AuthorRepository = require("../database/repositories/AuthorRepository");
const AuthorService = require("../services/AuthorService");
const AuthorController = require("../controllers/AuthorController");

const authorRepository = new AuthorRepository();
const authorService = new AuthorService(authorRepository);
const authorController = new AuthorController(authorService);

router
  .get("/", authorController.findAllAuthors)
  .get("/:authorId", authorController.findAuthorById)
  .post("/", authorController.createAuthor)
  .put("/:authorId", authorController.updateAuthor)
  .delete("/:authorId", authorController.deleteAuthor);

module.exports = router;
