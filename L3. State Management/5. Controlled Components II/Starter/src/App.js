import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import CreateItem from "./CreateItem";
import DeleteItem from "./DeleteItem";

const App = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    setItems([...items, value]);
    setValue("");
  };

  const handleDeleteLastItem = () => {
    setItems(items.slice(0, -1));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <h2>Shopping List</h2>
      <div className="btn-group">
        <CreateItem
          onAddItem={handleAddItem}
          onChange={handleChange}
          value={value}
        />

        <DeleteItem onClick={handleDeleteLastItem} items={items} />
      </div>
      <ol className="item-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
