import {
  FETCH_USER_DATA,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./UserType";

const initialState = {
  users: [],
  user: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        users: [],
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case FETCH_USER_DATA:
      return {
        ...state,
        // users: [],
        user: action.payload,
      };
    default:
      return state;
  }
};
export default UserReducer;
