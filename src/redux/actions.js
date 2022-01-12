import axios from "axios";
import * as types from "./actionType";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const getUser = (user) => ({
  type: types.GET_USER,
  payload: user,
});

const getPosts = (posts) => ({
  type: types.GET_POSTS,
  payload: posts,
});

const getPost = (post) => ({
  type: types.GET_POST,
  payload: post,
});

const getComments = (comments) => ({
  type: types.GET_COMMENTS,
  payload: comments,
});

const getAlbums = (albums) => ({
  type: types.GET_ALBUMS,
  payload: albums,
});

const getPhotos = (photos) => ({
  type: types.GET_PHOTOS,
  payload: photos,
});

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => {
        dispatch(getUsers(data));
      })
      .catch((error) => console.log(error));
  };
};

export const loadUser = (id) => {
  return function (dispatch) {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(({ data }) => {
        dispatch(getUser(data));
      })
      .catch((error) => console.log(error));
  };
};

export const loadPosts = () => {
  return function (dispatch) {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => {
        dispatch(getPosts(data));
      })
      .catch((error) => console.log(error));
  };
};

export const loadPost = (id) => {
  return function (dispatch) {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(({ data }) => {
        dispatch(getPost(data));
      })
      .catch((error) => console.log(error));
  };
};

export const loadComments = () => {
  return function (dispatch) {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(({ data }) => {
        dispatch(getComments(data));
      })
      .catch((error) => console.log(error));
  };
};

export const loadAlbums = () => {
  return function (dispatch) {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then(({ data }) => {
        dispatch(getAlbums(data));
      })
      .catch((error) => console.log(error));
  };
};

export const loadPhotos = () => {
  return function (dispatch) {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(({ data }) => {
        dispatch(getPhotos(data));
      })
      .catch((error) => console.log(error));
  };
};
