import {
  Card,
  CardContent,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { loadComments, loadPost, loadUsers } from "../redux/actions";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  card: {
    marginBottom: theme.spacing(5),
  },
}));

const DetailPost = () => {
  let dispatch = useDispatch();
  let history = useHistory();

  const { post } = useSelector((state) => state.data);
  const { users } = useSelector((state) => state.data);
  const { comments } = useSelector((state) => state.data);

  const classes = useStyles();

  const { id } = useParams();

  useEffect(() => {
    dispatch(loadPost(id));
  }, []);

  useEffect(() => {
    dispatch(loadComments());
  }, []);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <Container className={classes.container}>
      <Card>
        <CardContent>
          {users.map(
            (user, idx) =>
              user.id === post.userId && (
                <Typography key={idx} variant="h5">
                  Created by: <u onClick={() => history.push(`/detail-user/${user.id}`) }>{user.name}</u>
                </Typography>
              )
          )}
          <br />
          <Typography variant="h6">Title: {post.title}</Typography>
          <Typography variant="body1">Body: {post.body}</Typography>

          <Typography variant="h6">Comment : </Typography>
          {comments.map(
            (comment, idx) =>
              post.id === comment.postId && (
                <Card key={idx} className={classes.card}>
                  <CardContent>
                    <Typography variant="body1">
                      Author: {comment.email}
                    </Typography>
                    <Typography variant="body2">{comment.body}</Typography>
                  </CardContent>
                </Card>
              )
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default DetailPost;
