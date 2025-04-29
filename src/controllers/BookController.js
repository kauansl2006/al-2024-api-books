class BookController {
  constructor(bookService) {
    this.bookService = bookService;
  }

  findAllBooks = async (req, res, next) => {
    try {
      const booksFound = await this.bookService.findAllBooks();

      res.status(200).json(booksFound);
    } catch (error) {
      next(error);
    }
  };
  findBooksByFilter = async (req, res, next) => {
    const queryParams = req.query;

    try {
      const booksFound = await this.bookService.findBooksByFilter(queryParams);

      res.status(200).json(booksFound);
    } catch (error) {
      next(error);
    }
  };
  findBookById = async (req, res, next) => {
    const { bookId } = req.params;

    try {
      const bookFound = await this.bookService.findBookById(bookId);

      res.status(200).json(bookFound);
    } catch (error) {
      next(error);
    }
  };
  createBook = async (req, res, next) => {
    const dataToCreate = req.body;

    try {
      const bookCreated = await this.bookService.createBook(dataToCreate);

      res
        .status(200)
        .json({ messsage: "Book created successfully", data: bookCreated });
    } catch (error) {
      next(error);
    }
  };
  updateBook = async (req, res, next) => {
    const { bookId } = req.params;
    const dataToUpdate = req.body;

    try {
      const bookUpdated = await this.bookService.updateBook(
        bookId,
        dataToUpdate,
      );

      res
        .status(201)
        .json({ message: "Book updated successfully", data: bookUpdated });
    } catch (error) {
      next(error);
    }
  };
  deleteBook = async (req, res, next) => {
    const { bookId } = req.params;

    try {
      const bookDeleted = await this.bookService.deleteBook(bookId);

      res
        .status(200)
        .json({ message: "Book deleted successfully", data: bookDeleted });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = BookController;
