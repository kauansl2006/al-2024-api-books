const NotFound = require("../errors/NotFound");
const ServerError = require("../errors/ServerError");
const BadRequest = require("../errors/BadRequest");

class PublisherService {
  constructor(publisherRepository) {
    this.publisherRepository = publisherRepository;
  }

  findAllPublishers = async () => {
    try {
      const publishersFound =
        await this.publisherRepository.findAllPublishers();

      if (!publishersFound) throw new NotFound("Publishers not found");

      return publishersFound;
    } catch (error) {
      console.log("Service Error: ", error);
      throw error;
    }
  };
  findPublisherById = async (publisherId) => {
    try {
      const publisherFound =
        await this.publisherRepository.findPublisherById(publisherId);

      if (!publisherFound) throw new NotFound("Publisher not found");

      return publisherFound;
    } catch (error) {
      console.log("Service Error: ", error);
      throw error;
    }
  };
  createPublisher = async (dataToCreate) => {
    try {
      const publisherFound =
        await this.publisherRepository.findPublisherByName(dataToCreate);

      if (publisherFound)
        throw new BadRequest("Publisher is already registered");

      const publisherCreated =
        await this.publisherRepository.createPublisher(dataToCreate);

      if (!publisherCreated) throw new ServerError("Publisher not created");

      return publisherCreated;
    } catch (error) {
      console.log("Service Error: ", error);
      throw error;
    }
  };
  updatePublisher = async (publisherId, dataToUpdate) => {
    try {
      const publisherUpdated = await this.publisherRepository.updatePublisher(
        publisherId,
        dataToUpdate,
      );

      if (!publisherUpdated) throw new ServerError("Publisher not updated");

      return publisherUpdated;
    } catch (error) {
      console.log("Service Error: ", error);
      throw error;
    }
  };
  deletePublisher = async (publisherId) => {
    try {
      const publisherDeleted =
        await this.publisherRepository.deletePublisher(publisherId);

      if (!publisherDeleted) throw new ServerError("Publisher not deleted");

      return publisherDeleted;
    } catch (error) {
      console.log("Service Error: ", error);
      throw error;
    }
  };
}

module.exports = PublisherService;
