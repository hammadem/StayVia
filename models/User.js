const mongoose = require ('mongoose');
const schema = mongoose.Schema;
const passportLocalMongoose = require ('passport-local-mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new schema ({
    email: {
        type: String,
        required: true,
        unique: true,
        uniqueCaseInsensitive: true,
    }
});

UserSchema.plugin(passportLocalMongoose);
UserSchema.plugin(uniqueValidator, { message: 'A user with the given email is already registered' });

module.exports = mongoose.model('User', UserSchema);