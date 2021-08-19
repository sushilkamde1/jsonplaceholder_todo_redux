import {
  FETCH_USER_DATA,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./UserType";
import axios from "axios";

// request data to server
export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

// get All Users
export const fetchUser = () => async (dispatch) => {
  const result = await axios.get("https://jsonplaceholder.typicode.com/todos");
  dispatch({
    type: FETCH_USER_SUCCESS,
    payload: result.data,
  });
};

// get perticuler user
export const getUser = (id) => async (dispatch) => {
  const result = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  console.log("action", result.data);
  dispatch({
    type: FETCH_USER_DATA,
    payload: result.data,
  });
};
