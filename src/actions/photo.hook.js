const path = require('path');
const fs = require('fs');
const AdminBro = require('admin-bro');


const after = async (response, request, context) => {
    const { record, uploadImage } = context;

    if (record.isValid() && uploadImage) {
        const filePath = path.join('uploads', record.id().toString(), uploadImage.name);
        await fs.promises.mkdir(path.dirname(filePath), { recursive: true });

        const readStream = fs.createReadStream(uploadImage.path);
        const writeStream = fs.createWriteStream(filePath);
        readStream.pipe(writeStream);
        readStream.on('end',function(){
            fs.unlinkSync(uploadImage.path);
        });

        await record.update({ photoLocation: `/${filePath}` });
    }
    return response;
};

const before = async (request, context) => {
    if (request.method === 'post') {
        const { uploadImage, ...otherParams } = request.payload;

        // eslint-disable-next-line no-param-reassign
        context.uploadImage = uploadImage;

        return {
            ...request,
            payload: otherParams,
        };
    }
    return request;
};

module.exports = { after, before };
