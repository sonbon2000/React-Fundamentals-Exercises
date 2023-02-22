import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import CreateUsers from "./CreateUsers";
import ListUsers from "./ListUsers";

const App = () => {
  const [usersList, setUsersList] = useState([]);
  const handleAddUsers = (user) => {
    user.gamePlayed = 0;
    setUsersList([...usersList, user]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <CreateUsers onAddUser={handleAddUsers} usersList={usersList} />
      <ListUsers usersList={usersList} />
    </div>
  );
};

export default App;
