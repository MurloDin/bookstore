const AdminBro = require('admin-bro');
const AdminBroMongoose = require('@admin-bro/mongoose')

const UserAuth = require('./models/users/user.auth');
const BooksOptions = require('./models/books/books.options');
const OrderOptions = require('./models/orders/order.options');


AdminBro.registerAdapter(AdminBroMongoose);

const options = {
    resources: [UserAuth, BooksOptions, OrderOptions],
};


module.exports = options;

