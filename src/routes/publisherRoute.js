const express = require("express");
const router = express.Router();

const PublisherRepository = require("../database/repositories/PublisherRepository");
const PublisherService = require("../services/PublisherService");
const PublisherController = require("../controllers/PublisherController");

const publisherRepository = new PublisherRepository();
const publisherService = new PublisherService(publisherRepository);
const publisherController = new PublisherController(publisherService);

router
  .get("/", publisherController.findAllPublishers)
  .get("/:publisherId", publisherController.findPublisherById)
  .post("/", publisherController.createPublisher)
  .put("/:publisherId", publisherController.updatePublisher)
  .delete("/:publisherId", publisherController.deletePublisher);

module.exports = router;
