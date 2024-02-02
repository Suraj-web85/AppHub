import React, { useState } from "react";

function ListUsers() {
  const [Users, setUsers] = useState();
  return (
    <div>
      <h2>List of Users</h2>
      {Users?.length ? (
        <ul>
          {Users.map((user, i) => (
            <li className="para" key={i}>
              {user?.username}
            </li>
          ))}
        </ul>
      ) : (
        <div className="para">No Users To Display </div>
      )}
    </div>
  );
}

export default ListUsers;
