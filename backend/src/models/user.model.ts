import { Schema, model } from "mongoose";
//@ts-ignore
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

  //@ts-ignore
  genSalt(10, function (err, salt) {
    if (err) return next(err);

    //@ts-ignore
    _hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

//@ts-ignore
UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  //@ts-ignore
  compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const User = model("User", UserSchema);

export { User, UserSchema };
