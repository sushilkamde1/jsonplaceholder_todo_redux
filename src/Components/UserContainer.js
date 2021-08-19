import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, getUser } from "../redux/Users/UserAction";

const UserContainer = () => {
  const [searchTerm, setSearchTerm] = useState([]);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return users ? (
    <div className="row ">
      <div className="header">
        <span className="heading">Todos</span>
        <span>
          <input
            id="search"
            type="text"
            placeholder="Search.."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </span>
      </div>
      <div className="useContainer">
        <table className="table text-center table-hover table-bordered shadow">
          <thead>
            <tr>
              <th>ToDo Id</th>
              <th>Title</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((val) =>
                searchTerm === ""
                  ? val
                  : val.title.toLowerCase().includes(searchTerm)
                  ? val
                  : null
              )
              .map((user) => (
                <tr key={user.id}>
                  <td>{user.userId}</td>
                  <td>{user.title}</td>
                  <td>
                    {user.completed ? <p>complete</p> : <p>Incomplete</p>}
                  </td>
                  <td>
                    <button
                      className="btn btn-primary btn"
                      onClick={() => dispatch(getUser(user.id))}
                    >
                      View User
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : null;
};
export default UserContainer;
