import { Schema, model } from "mongoose";

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
  }
});

const Post = model("Comapny", companySchema);

export default Post;
