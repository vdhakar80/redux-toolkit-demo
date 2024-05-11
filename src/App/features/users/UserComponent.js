import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAction } from "./userSlice";

function UserComponent() {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>User List:</h1>
      {userData.loading && <div>Loading...</div>}
      <ul>
        {userData?.data?.map((data) => (
          <li>{data}</li>
        ))}
      </ul>
      {userData.error && <div>{userData.error}</div>}
      <button
        onClick={() => {
          dispatch(fetchUsersAction());
        }}
      >
        Fetch Users
      </button>
    </div>
  );
}

export default UserComponent;
