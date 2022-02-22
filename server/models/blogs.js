import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  title: String,
  description: String,
  tags: [String],
  fileUpload: String,
  email: {
    type: String,
    require: true,
  },
  upvote: {
    type: Number,
    default: 0,
  },
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var BlogPost = mongoose.model("BlogArticle", blogSchema);

export default BlogPost;
