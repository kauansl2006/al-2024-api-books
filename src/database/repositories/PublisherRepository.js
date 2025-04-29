const { Publisher } = require("../models");

class PublisherRepository {
  constructor() {}

  findAllPublishers = async () => {
    return await Publisher.find({});
  };
  findPublisherById = async (publisherId) => {
    return await Publisher.findById(publisherId).exec();
  };
  findPublisherByName = async (dataToCreate) => {
    return await Publisher.findOne({ name: dataToCreate.name }).exec();
  };
  createPublisher = async (dataToCreate) => {
    return await Publisher.create(dataToCreate);
  };
  updatePublisher = async (publisherId, dataToUpdate) => {
    return await Publisher.findByIdAndUpdate(publisherId, dataToUpdate, {
      new: true,
    });
  };
  deletePublisher = async (publisherId) => {
    return await Publisher.findByIdAndDelete(publisherId);
  };
}

module.exports = PublisherRepository;
