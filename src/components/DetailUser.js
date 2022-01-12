import {
  Card,
  CardContent,
  Container,
  ImageList,
  ImageListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadAlbums, loadPhotos, loadUser } from "../redux/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  container: {
    paddingTop: theme.spacing(10),
  },
  card: {
    marginBottom: theme.spacing(5),
  },
}));

const DetailUser = () => {
  let dispatch = useDispatch();

  const { user } = useSelector((state) => state.data);
  const { albums } = useSelector((state) => state.data);
  const { photos } = useSelector((state) => state.data);

  const classes = useStyles();

  const { id } = useParams();

  useEffect(() => {
    dispatch(loadUser(id));
  }, []);

  useEffect(() => {
    dispatch(loadAlbums());
  }, []);

  useEffect(() => {
    dispatch(loadPhotos());
  }, []);

  return (
    <Container className={classes.container}>
      <Card>
        <CardContent>
          <Typography variant="h4">{user.name}</Typography>
          <Typography variant="h5">{user.email}</Typography>
          <br />
          <Typography variant="h5">Album : </Typography>
          <ul>
            {albums.map(
              (album, idx) =>
                user.id === album.userId && (
                  <li key={idx}>
                    <Typography variant="body1">{album.title}</Typography>
                    <div className={classes.root}>
                      <ImageList className={classes.imageList} cols={2.5}>
                        {photos.map(
                          (photo, idx) =>
                            photo.albumId === album.id && (
                              <ImageListItem key={idx}>
                                <img src={photo.thumbnailUrl} alt="" />
                              </ImageListItem>
                            )
                        )}
                      </ImageList>
                    </div>
                  </li>
                )
            )}
          </ul>
        </CardContent>
      </Card>
    </Container>
  );
};

export default DetailUser;
