class AuthorController {
  constructor(authorService) {
    this.authorService = authorService;
  }

  findAllAuthors = async (req, res, next) => {
    try {
      const authorsFound = await this.authorService.findAllAuthors();

      res.status(200).json(authorsFound);
    } catch (error) {
      next(error);
    }
  };
  findAuthorById = async (req, res, next) => {
    const { authorId } = req.params;

    try {
      const authorFound = await this.authorService.findAuthorById(authorId);

      res.status(200).json(authorFound);
    } catch (error) {
      next(error);
    }
  };
  createAuthor = async (req, res, next) => {
    const dataToCreate = req.body;

    try {
      const authorCreated = await this.authorService.createAuthor(dataToCreate);

      res
        .status(200)
        .json({ messsage: "Author created successfully", data: authorCreated });
    } catch (error) {
      next(error);
    }
  };
  updateAuthor = async (req, res, next) => {
    const { authorId } = req.params;
    const dataToUpdate = req.body;

    try {
      const authorUpdated = await this.authorService.updateAuthor(
        authorId,
        dataToUpdate,
      );

      res
        .status(201)
        .json({ message: "Author updated successfully", data: authorUpdated });
    } catch (error) {
      next(error);
    }
  };
  deleteAuthor = async (req, res, next) => {
    const { authorId } = req.params;

    try {
      const authorDeleted = await this.authorService.deleteAuthor(authorId);

      res
        .status(200)
        .json({ message: "Author deleted successfully", data: authorDeleted });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = AuthorController;
