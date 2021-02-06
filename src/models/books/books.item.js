const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    pages: {
        type: String,
        required: true,
    },
    publisher : {
       type: String,
    },
    author: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 1,
    },
    category: {
        type: String,
    },
    discount: {
        type: Number,
        required: true,
        min: 0,
        max: 99
    },
    photoLocation: {
        type: String,
    }
});

module.exports = mongoose.model('Книги', booksSchema)
