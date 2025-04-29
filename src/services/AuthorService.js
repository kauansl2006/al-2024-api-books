const NotFound = require("../errors/NotFound");
const ServerError = require("../errors/ServerError");
const BadRequest = require("../errors/BadRequest");

class AuthorService {
  constructor(authorRepository) {
    this.authorRepository = authorRepository;
  }

  findAllAuthors = async () => {
    try {
      const authorsFound = await this.authorRepository.findAllAuthors();

      if (!authorsFound) throw new NotFound("Authors not found");

      return authorsFound;
    } catch (error) {
      console.log("Service Error: ", error);
      throw error;
    }
  };
  findAuthorById = async (authorId) => {
    try {
      const authorFound = await this.authorRepository.findAuthorById(authorId);

      if (!authorFound) throw new NotFound("Author not found");

      return authorFound;
    } catch (error) {
      console.log("Service Error: ", error);
      throw error;
    }
  };
  createAuthor = async (dataToCreate) => {
    try {
      const authorFound =
        await this.authorRepository.findAuthorByName(dataToCreate);

      if (authorFound) throw new BadRequest("Author is already registered");

      const authorCreated =
        await this.authorRepository.createAuthor(dataToCreate);

      if (!authorCreated) throw new ServerError("Author not created");

      return authorCreated;
    } catch (error) {
      console.log("Service Error: ", error);
      throw error;
    }
  };
  updateAuthor = async (authorId, dataToUpdate) => {
    try {
      const authorUpdated = await this.authorRepository.updateAuthor(
        authorId,
        dataToUpdate,
      );

      if (!authorUpdated) throw new ServerError("Author not updated");

      return authorUpdated;
    } catch (error) {
      console.log("Service Error: ", error);
      throw error;
    }
  };
  deleteAuthor = async (authorId) => {
    try {
      const authorDeleted = await this.authorRepository.deleteAuthor(authorId);

      if (!authorDeleted) throw new ServerError("Author not deleted");

      return authorDeleted;
    } catch (error) {
      console.log("Service Error: ", error);
      throw error;
    }
  };
}

module.exports = AuthorService;
