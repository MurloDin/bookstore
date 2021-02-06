const AdminBro = require('admin-bro');
const Books = require('./books.item');

const { after: photoAfterHook, before: photoBeforeHook } = require('../../actions/photo.hook');


const options = {
    properties: {
        photoLocation: {
            isVisible: false,
        },
        uploadImage: {
            components: {
                edit: AdminBro.bundle('../../components/UploadPhoto.tsx'),
                list: AdminBro.bundle('../../components/ViewPhoto.tsx'),
            }
        },
    },
    actions: {
        new: {
            after: photoAfterHook,
            before: photoBeforeHook,
        },
        edit: {
            after: photoAfterHook,
            before: photoBeforeHook,
        },
        show: {
            isVisible: false,
        },
    },
};

module.exports = {
    options,
    resource: Books,
};
