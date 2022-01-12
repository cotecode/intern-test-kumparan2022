import * as types from "./actionType";

const initialState = {
  users: [],
  user: {},
  posts: [],
  post: {},
  comments: [],
  albums: [],
  photos: [],
};

const dataReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return { ...state, users: action.payload };
    case types.GET_POSTS:
      return { ...state, posts: action.payload };
    case types.GET_COMMENTS:
      return { ...state, comments: action.payload };
    case types.GET_ALBUMS:
      return { ...state, albums: action.payload };
    case types.GET_PHOTOS:
      return { ...state, photos: action.payload };
    case types.GET_POST:
      return { ...state, post: action.payload };
    case types.GET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default dataReducers;
