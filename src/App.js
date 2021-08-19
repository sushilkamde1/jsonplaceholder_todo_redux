import React from "react";
import Store from "./Store/Store";
import { Provider } from "react-redux";
import UserContainer from "./Components/UserContainer";
import UserInfo from "./Components/UserInfo";
const App = () => {
  return (
    <Provider store={Store}>
      <div className="container">
        {/* todos */}
        <div className="users">
          <UserContainer />
        </div>
        {/* User details  */}
        <div className="user">
          <UserInfo />
        </div>
      </div>
    </Provider>
  );
};
export default App;
