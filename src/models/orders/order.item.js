const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true,
    },
    house: {
        type: String,
        required: true,
    },
    apartment: {
        type: String,
    },
    floor: {
        type: Number,
    },
    entrance: {
        type: String,
    },
    code: {
        type: String,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    ticket: {
        type: String,
    },
    comment: {
        type: String,
    },
    payment: {
        type: String,
        required: true,
    },
    items: {
        type: Array,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    }
});


module.exports = mongoose.model('Order', orderSchema)
