import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../Redux/counterSlices";

function FetchApis() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers);
  }, []);

  return (
    <div>
      {/* <h2>Lists of Posts</h2>
      {user.loading && <div>Loading . . . </div>}
      {!user.loading && user.error ? <div>Error: {user.error} </div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user) => (
            <li key={user.id}>{user.title}</li>
          ))}
        </ul>
      ) : null} */}
    </div>
  );
}

export default FetchApis;
