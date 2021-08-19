import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/Users/UserAction";

const UserInfo = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    getUser();
  }, [dispatch]);

  return user ? (
    <div className="row">
      <span className="heading text-center m-4">User Details</span>
      <div className="userInfo">
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>
                <b>ToDo ID: </b>
              </td>
              <td>{user.id}</td>
            </tr>
            <tr>
              <td>
                <b>Title: </b>
              </td>
              <td>{user.username}</td>
            </tr>
            <tr>
              <td>
                <b>Name: </b>
              </td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td>
                <b>Email: </b>
              </td>
              <td>{user.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ) : null;
};
export default UserInfo;
