import React from "react";
import {
  Typography,
  CardMedia,
  Button,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core/";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PreviewIcon from '@mui/icons-material/Preview';
import moment from "moment";
import { useDispatch } from "react-redux";
import blogImageLogo from "../../Assets/blogLogo.gif";

import { upvoteBlogPosts, removeBlogPosts } from "../../redux/action/Action";
import useStyles from "./styles";
import { useAuth } from "../authContext";
import { Link } from "react-router-dom";
const BlogPosts = ({ post, setBlogPostId }) => {
  const { currentUser } = useAuth();
  const dispatch = useDispatch();
  const blogPostStyles = useStyles();

  return (
    <>
      <Card className={blogPostStyles.blogContainer}>
        <CardMedia
          className={blogPostStyles.imageContainer}
          image={post.fileUpload || blogImageLogo}
          title={post.title}
        />
        <div className={blogPostStyles.nameOverlay}>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        {currentUser && currentUser.email === post.email ? (
          <div className={blogPostStyles.editOverlay}>
            <Link to={`/update/${post._id}`}>
              <Button
                style={{ color: "white" }}
                size="small"
                // onClick={() => setBlogPostId(post._id)}
              >
                <EditIcon fontSize="default" />
              </Button>
            </Link>
          </div>
        ) : (
          ""
        )}

        <div className={blogPostStyles.tagSection}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div>
        <Typography
          className={blogPostStyles.titleSection}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {post.title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.description}
          </Typography>
        </CardContent>
        <CardActions className={blogPostStyles.cardActions}>
          <Link to={`/view/${post._id}`}>
            <Button
              style={{ color: "white" }}
              size="small"
              // onClick={() => setBlogPostId(post._id)}
            >
              <PreviewIcon color="primary" fontSize="default" />
            </Button>
          </Link>
          {currentUser && currentUser.email === post.email ? (
            <Button
              size="small"
              color="primary"
              onClick={() => dispatch(removeBlogPosts(post._id))}
            >
              <DeleteIcon fontSize="big" />
            </Button>
          ) : (
            ""
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default BlogPosts;
