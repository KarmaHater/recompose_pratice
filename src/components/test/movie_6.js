import React from "react";
import { mapProps } from "recompose";

const users = [
  { name: "andra", status: "active" },
  { name: "tim", status: "inactive" },
  { name: "mark", status: "pending" }
];

const UserList = ({ users, status }) => (
  <div>
    <h3>{status} users</h3>
    {users && users.map(user => <User {...user} />)}
  </div>
);

const User = ({ name, status }) => (
  <div style={{ backgroundColor: "red", padding: "20px" }}>
    {name} - {status}
  </div>
);

// mapProps takes is a function that takes in the props
const filterByStatus = status =>
  mapProps(({ users }) => ({
    status,
    users: users.filter(u => u.status === status)
  }));

const ActiveUsers = filterByStatus("active")(UserList);
const InactiveUsers = filterByStatus("inactive")(UserList);
const PendingUsers = filterByStatus("pending")(UserList);

const App = () => (
  <div>
    <ActiveUsers users={users} />
    <InactiveUsers users={users} />
    <PendingUsers users={users} />
  </div>
);

export default App;
