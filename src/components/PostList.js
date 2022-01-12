import {
  Card,
  CardContent,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

import {useHistory} from 'react-router'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  card: {
    marginBottom: theme.spacing(5),
  },
}));

const PostList = ({ posts, users, page }) => {
  let history = useHistory();

  const classes = useStyles();

  const startIndex = (page - 1) * 10;
  const selectedPosts = posts.slice(startIndex, startIndex + 10);

  return (
    <Container className={classes.container}>
      <>
        {selectedPosts.map((post, idx) => {
          const { userId } = post;

          return (
            <Card onClick={() => history.push(`/detail-post/${post.id}`)} className={classes.card} key={idx}>
              {/* blog posts */}
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {post.title}
                </Typography>
                <Typography variant="body1">{post.body}</Typography>
                <br />
                {users.map((user, idx) =>
                  user.id === userId ? (
                    <div key={idx}>
                      <Typography variant="body2">
                        was created by <b>{user.name}</b>
                      </Typography>
                      <Typography variant="body2">
                        company : <b> {user.company.name} </b>
                      </Typography>
                    </div>
                  ) : null
                )}
              </CardContent>
            </Card>
          );
        })}
      </>
    </Container>
  );
};

export default PostList;
