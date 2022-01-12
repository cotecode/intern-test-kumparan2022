import React, { useState } from "react";
import PostList from "./components/PostList";

import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadPosts, loadUsers } from "./redux/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
      justifyContent: "center",
      display: "flex",
      marginBottom: theme.spacing(2),
    },
  },
}));

const Home = () => {
  // redux
  let dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);
  const { posts } = useSelector((state) => state.data);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  useEffect(() => {
    setTotalPages(users.length); 
    dispatch(loadUsers());
  }, [users]);

  return (
    <>
      <PostList posts={posts} users={users} page={page} />
      <Pagination
        count={totalPages}
        onChange={(e, value) => setPage(value)}
        className={classes.root}
      />
    </>
  );
};

export default Home;
