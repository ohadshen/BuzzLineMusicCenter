import { Schema, model } from "mongoose";

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
  },
});

const Post = model("Company", companySchema);

export default Post;
