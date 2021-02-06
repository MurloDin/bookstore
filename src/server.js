const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const AdminBro = require('admin-bro');
const options = require('./admin.options');
const buildAdminRouter = require('./admin.router');
const Books = require('./models/books/books.item');
const bodyParser = require("body-parser");
const Order = require('./models/orders/order.item')



const app = express();
const port = 8000;

const run = async () => {
    await mongoose.connect('mongodb://localhost:27017/bookshop', {
        useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,
    });
    const admin = new AdminBro(options);
    const router = buildAdminRouter(admin);

    app.use('/uploads', express.static('uploads'));
    app.use(admin.options.rootPath, router);
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.get('/api/books', (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*")
        Books.find({}, (err, books) => {
            res.send(books);
        });
    });


    app.post('/api/order', (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.setHeader("Access-Control-Allow-Origin", "*")
        const {values, order, total} = req.body;
        const newOrder = new Order({
            ...values,
            items: order,
            total: total,
        })
        newOrder.save();
        res.send('okey')
    })

    app.listen(port, () => console.log(`сервер запущен на http://localhost:${port}`,));
};

module.exports = run;
