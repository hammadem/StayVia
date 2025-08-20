const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API,
    api_secret: process.env.CLOUD_API_SECRET,
  });

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'StayVia DEV',
      allowedFormats: ['png','jpg','jpeg'],
    },
  });

let delImageCloudinary = async (req,res,next)=>{
    await cloudinary.uploader
    .destroy(req.body.imageFilename, {resource_type: 'image', invalidate: true})
    .then(result => console.log(result));
    next();
  }

module.exports = {cloudinary, storage, delImageCloudinary};