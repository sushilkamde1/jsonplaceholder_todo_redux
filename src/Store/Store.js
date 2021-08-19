import { createStore, applyMiddleware } from "redux";
import UserReducer from "../redux/Users/UserReducer";
import thunk from "redux-thunk";

const Store = createStore(UserReducer, applyMiddleware(thunk));

export default Store;
