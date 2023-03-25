import { useState } from "react";
import Card from "./components/UI/Card";
import UserForm from "./components/Users/UserForm";
import UserList from "./components/Users/UserList";

const usersList = [];

function App() {
  const [users, setUsers] = useState(usersList);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div className="App">
      <Card>
        <UserForm onAddUser={addUserHandler} />
      </Card>
      <UserList items={users} />
    </div>
  );
}

export default App;
