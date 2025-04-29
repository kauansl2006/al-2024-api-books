class PublisherController {
  constructor(publisherService) {
    this.publisherService = publisherService;
  }

  findAllPublishers = async (req, res, next) => {
    try {
      const publishersFound = await this.publisherService.findAllPublishers();

      res.status(200).json(publishersFound);
    } catch (error) {
      next(error);
    }
  };
  findPublisherById = async (req, res, next) => {
    const { publisherId } = req.params;

    try {
      const publisherFound =
        await this.publisherService.findPublisherById(publisherId);

      res.status(200).json(publisherFound);
    } catch (error) {
      next(error);
    }
  };
  createPublisher = async (req, res, next) => {
    const dataToCreate = req.body;

    try {
      const publisherCreated =
        await this.publisherService.createPublisher(dataToCreate);

      res.status(200).json({
        messsage: "Publisher created successfully",
        data: publisherCreated,
      });
    } catch (error) {
      next(error);
    }
  };
  updatePublisher = async (req, res, next) => {
    const { publisherId } = req.params;
    const dataToUpdate = req.body;

    try {
      const publisherUpdated = await this.publisherService.updatePublisher(
        publisherId,
        dataToUpdate,
      );

      res.status(201).json({
        message: "Publisher updated successfully",
        data: publisherUpdated,
      });
    } catch (error) {
      next(error);
    }
  };
  deletePublisher = async (req, res, next) => {
    const { publisherId } = req.params;

    try {
      const publisherDeleted =
        await this.publisherService.deletePublisher(publisherId);

      res.status(200).json({
        message: "Publisher deleted successfully",
        data: publisherDeleted,
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = PublisherController;
