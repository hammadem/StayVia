const Joi = require ('joi');

const listingSchema = Joi.object ({
    listing: {
        title: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.allow("",null),
        price: Joi.number().min(0).required(),
        location: Joi.string().required(),
        country:  Joi.string().required(),
        category:  Joi.string().min(1).required(),
    }
});

const reviewSchema = Joi.object ({
    review: {
        comment: Joi.string().required(),
        rating: Joi.number().min(1).max(5).required(),
        datePosted: Joi.allow("",null),
    }
});

module.exports = {listingSchema,reviewSchema};