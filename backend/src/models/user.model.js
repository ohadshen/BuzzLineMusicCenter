"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.User = void 0;
var mongoose_1 = require("mongoose");
//@ts-ignore
var bcrypt_1 = require("bcrypt");
var UserSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});
exports.UserSchema = UserSchema;
UserSchema.pre("save", function (next) {
    var user = this;
    if (!user.isModified("password"))
        return next();
    //@ts-ignore
    (0, bcrypt_1.genSalt)(10, function (err, salt) {
        if (err)
            return next(err);
        //@ts-ignore
        (0, bcrypt_1.hash)(user.password, salt, function (err, hash) {
            if (err)
                return next(err);
            user.password = hash;
            next();
        });
    });
});
//@ts-ignore
UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    //@ts-ignore
    (0, bcrypt_1.compare)(candidatePassword, this.password, function (err, isMatch) {
        if (err)
            return cb(err);
        cb(null, isMatch);
    });
};
var User = (0, mongoose_1.model)("User", UserSchema);
exports.User = User;
