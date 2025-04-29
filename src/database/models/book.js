const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "The field title is required"] },
    cover: { type: String, required: [true, "The field cover is required"] },
    pages: {
      type: Number,
      required: [true, "The field number of pages is required"],
      validate: {
        validator: (value) => value > 0,
        message: (props) => `${props.value} is not a valid number of pages`,
      },
    },
    price: {
      type: Number,
      required: [true, "The field price is required"],
      validate: {
        validator: (value) => value > 0,
        message: (props) => `${props.value} is not a valid price`,
      },
    },
    quantity: {
      type: Number,
      default: 0,
      validate: [
        {
          validator: Number.isInteger,
          message: (props) => `${props.value} is not an integer value`,
        },
        {
          validator: (value) => value >= 0,
          message: (props) => `${props.value} is not a valid quantity`,
        },
      ],
    },
    category: {
      type: String,
      required: [true, "The field category is required"],
      enum: {
        values: [
          "Fiction",
          "Non-Fiction",
          "Science",
          "History",
          "Biography",
          "Children",
          "Fantasy",
        ],
        message: "The category `{VALUE}` is not valid",
      },
    },
    publisher: {
      type: String,
      required: [true, "The field publisher is required"],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "authors",
      required: [true, "The field author is required"],
    },
  },
  { timestamps: true },
);

const Book = mongoose.model("books", bookSchema);

module.exports = Book;
