const { Book, Author, Publisher } = require("../models");

class BookRepository {
  constructor() {}

  findAllBooks = async () => {
    return await Book.find({});
  };
  findBooksByFilter = async (queryParams) => {
    const query = await this.#handleQueryParams(queryParams);

    return await Book.find(query).populate("publisher", "author").exec();
  };
  findBookById = async (bookId) => {
    return await Book.findById(bookId).populate("publisher", "author").exec();
  };
  findBookBy = async (data) => {
    return await Book.findOne({ title: data.title })
      .populate("publisher", "author")
      .exec();
  };
  createBook = async (dataToCreate) => {
    return await Book.create(dataToCreate);
  };
  updateBook = async (bookId, dataToUpdate) => {
    return await Book.findByIdAndUpdate(bookId, dataToUpdate, {
      new: true,
    });
  };
  deleteBook = async (bookId) => {
    return await Book.findByIdAndDelete(bookId);
  };

  #handleQueryParams = async (queryParams) => {
    const {
      title,
      minPages,
      maxPages,
      minPrice,
      maxPrice,
      minQuantity,
      maxQuantity,
      categoryName,
      publisherName,
      authorName,
    } = queryParams;

    let query = {};

    if (title) query.title = { $regex: title, $options: "i" };

    if (minPages || maxPages) query.numPages = {};
    if (minPages) query.numPages.$gte = parseInt(minPages);
    if (maxPages) query.numPages.$lte = parseInt(maxPages);

    if (minPrice || maxPrice) query.price = {};
    if (minPrice) query.price.$gte = parseFloat(minPrice);
    if (maxPrice) query.price.$lte = parseFloat(maxPrice);

    if (minQuantity || maxQuantity) query.quantity = {};
    if (minQuantity) query.quantity.$gte = parseInt(minQuantity);
    if (maxQuantity) query.quantity.$lte = parseInt(maxQuantity);

    if (categoryName) query.category = { $regex: categoryName, $options: "i" };

    if (publisherName) {
      const publisherFound = await Publisher.findOne({ name: publisherName });

      if (!publisherFound) query.publisher = null;
      else query.publisher = publisherFound._id;
    }
    if (authorName) {
      const authorFound = await Author.findOne({ name: authorName });

      if (!authorFound) query.author = null;
      else query.author = authorFound._id;
    }

    return query;
  };
}

module.exports = BookRepository;
