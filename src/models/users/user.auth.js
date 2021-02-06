const AdminBro = require('admin-bro');
const argon2 = require('argon2');
const User = require('./user.data');
const { after: passwordAfterHook, before: passwordBeforeHook } = require('../../actions/password.hook');


const options = {
    properties: {
        encryptedPassword: {
            isVisible: false,
        },
        password: {
            type: "password",
        },
    },
    actions: {
        new: {
            after: passwordAfterHook,
            before: passwordBeforeHook,
        },
        edit: {
            after: passwordAfterHook,
            before: passwordBeforeHook,
        },
    },
};

module.exports = {
    options,
    resource: User,
};
