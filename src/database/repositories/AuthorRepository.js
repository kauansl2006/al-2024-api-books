const { Author } = require("../models");

class AuthorRepository {
  constructor() {}

  findAllAuthors = async () => {
    return await Author.find({});
  };
  findAuthorById = async (authorId) => {
    return await Author.findById(authorId).exec();
  };
  findAuthorByName = async (data) => {
    return await Author.findOne({ name: data.name }).exec();
  };
  createAuthor = async (dataToCreate) => {
    return await Author.create(dataToCreate);
  };
  updateAuthor = async (authorId, dataToUpdate) => {
    return await Author.findByIdAndUpdate(authorId, dataToUpdate, {
      new: true,
    });
  };
  deleteAuthor = async (authorId) => {
    return await Author.findByIdAndDelete(authorId);
  };
}

module.exports = AuthorRepository;
