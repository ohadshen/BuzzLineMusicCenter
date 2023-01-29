import { Schema, model } from "mongoose";
import { genSalt, hash as _hash, compare } from "bcrypt";

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", function (next) {
  var user = this;

  if (!user.isModified("password")) return next();

  genSalt(10, function (err, salt) {
    if (err) return next(err);

    _hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const User = model("User", UserSchema);

export { User, UserSchema };
