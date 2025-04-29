const NotFound = require("../errors/NotFound");
const ServerError = require("../errors/ServerError");
const BadRequest = require("../errors/BadRequest");

class BookService {
  constructor(bookRepository) {
    this.bookRepository = bookRepository;
  }

  findAllBooks = async () => {
    try {
      const booksFound = await this.bookRepository.findAllBooks();

      if (!booksFound) throw new NotFound("Books not found");

      return booksFound;
    } catch (error) {
      console.log("Service Error: ", error);
      throw error;
    }
  };
  findBooksByFilter = async (queryParams) => {
    try {
      const booksFound =
        await this.bookRepository.findBooksByFilter(queryParams);

      if (booksFound) return booksFound;
      else return [];
    } catch (error) {
      console.log("Service Error: ", error);
      throw error;
    }
  };
  findBookById = async (bookId) => {
    try {
      const bookFound = await this.bookRepository.findBookById(bookId);

      if (!bookFound) throw new NotFound("Book not found");

      return bookFound;
    } catch (error) {
      console.log("Service Error: ", error);
      throw error;
    }
  };
  createBook = async (dataToCreate) => {
    try {
      const bookFound = await this.bookRepository.findBookBy(dataToCreate);

      if (bookFound) throw new BadRequest("Book is already registered");

      const bookCreated = await this.bookRepository.createBook(dataToCreate);

      if (!bookCreated) throw new ServerError("Book not created");

      return bookCreated;
    } catch (error) {
      console.log("Service Error: ", error);
      throw error;
    }
  };
  updateBook = async (bookId, dataToUpdate) => {
    try {
      const bookUpdated = await this.bookRepository.updateBook(
        bookId,
        dataToUpdate,
      );

      if (!bookUpdated) throw new ServerError("Book not updated");

      return bookUpdated;
    } catch (error) {
      console.log("Service Error: ", error);
      throw error;
    }
  };
  deleteBook = async (bookId) => {
    try {
      const bookDeleted = await this.bookRepository.deleteBook(bookId);

      if (!bookDeleted) throw new ServerError("Book not deleted");

      return bookDeleted;
    } catch (error) {
      console.log("Service Error: ", error);
      throw error;
    }
  };
}

module.exports = BookService;
