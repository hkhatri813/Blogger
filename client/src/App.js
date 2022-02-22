import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Grow, Grid } from "@material-ui/core";
import Blogs from "./components/Blogs";
import BlogPostsForm from "./components/BlogPostsForm";
import useStyles from "./styles/app.styles.js";
import { useDispatch } from "react-redux";
import { fetchAllBlogPosts } from "../src/redux/action/Action";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import { AuthProvider } from "./components/authContext";
import AuthRoute from "./components/authRoute";
import BlogPostsFormUpdate from "./components/BlogPostsForm/BlogPostsFormUpdate";
import PageNotFound from "./PageNotFound";
import BlogView from "./components/BlogPostsForm/BlogView";
function App() {
  const [blogPostId, setBlogPostId] = useState(0);
  const dispatch = useDispatch();
  const appStyles = useStyles();

  useEffect(() => {
    dispatch(fetchAllBlogPosts());
  }, [blogPostId, dispatch]);

  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          <Container maxWidth="xl">
            <Grow in>
              <Grid
                container
                justifyContent="space-between"
                alignItems="stretch"
                spacing={2}
              >
                <Routes>
                  <Route exact path="Register" element={<Register />}></Route>
                  <Route exact path="Login" element={<Login />}></Route>
                  <Route
                    exact
                    path="create"
                    element={
                      <AuthRoute>
                        <Grid item xs={12} sm={12}>
                          <BlogPostsForm
                            blogPostId={blogPostId}
                            setBlogPostId={setBlogPostId}
                          />
                        </Grid>
                      </AuthRoute>
                    }
                  ></Route>
                  <Route
                    exact
                    path="update/:id"
                    element={
                      <AuthRoute>
                        <Grid item xs={12} sm={12}>
                          <BlogPostsFormUpdate
                            blogPostId={blogPostId}
                            setBlogPostId={setBlogPostId}
                          />
                        </Grid>
                      </AuthRoute>
                    }
                  ></Route>
                  <Route
                    exact
                    path="/"
                    element={
                      <Grid item xs={12} sm={12}>
                        <Blogs setBlogPostId={setBlogPostId} />
                      </Grid>
                    }
                  ></Route>
                  <Route
                    exact
                    path="/view/:id"
                    element={
                      <BlogView />
                    }
                  ></Route>
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </Grid>
            </Grow>
          </Container>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
