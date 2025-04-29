const mongoose = require("mongoose");

const publisherSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "The field name is required"] },
    photo: {
      type: String,
      required: [true, "The field photo is required"],
    },
    description: {
      type: String,
      required: [true, "The field description is required"],
    },
  },
  { timestamps: true },
);

const Publisher = mongoose.model("publishers", publisherSchema);

module.exports = Publisher;
