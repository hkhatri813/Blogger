import React, { useState, useEffect } from "react";
import { Paper, TextField, Typography, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { useParams } from "react-router-dom";
import useStyles from "./styles";
import {
  addBlogPosts,
  editBlogPosts,
  getSingleBlogPost,
} from "../../redux/action/Action";
import "./BlogView.css";

function BlogView() {
  const posts1 = useSelector((state) => state.posts);
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const [blogInfo, setBlogInfo] = useState({
    creator: "",
    title: "",
    description: "",
    tags: "",
    fileUpload: "",
  });
  const post = useSelector((state) =>
    posts1 ? state.posts.find((message) => message._id === id) : null
  );
  // const dispatch = useDispatch();
  const blogPostsStyles = useStyles();

  useEffect(() => {
    if (post) setBlogInfo(post);
  }, [post]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(editBlogPosts(id, blogInfo));
  };

  return (
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="well blog">
          
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
              <div className="image">
                <img
                  src={blogInfo.fileUpload}
                  alt=""
                />
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div className="blog-details">
                <h2>{blogInfo.title}</h2>
                <p>{blogInfo.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogView;
