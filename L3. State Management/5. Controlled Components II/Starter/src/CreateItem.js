import React from "react";

function CreateItem({ onAddItem, onChange, value }) {
  return (
    <form onSubmit={onAddItem}>
      <input
        type="text"
        placeholder="Enter New Item"
        value={value}
        onChange={onChange}
      />
      <button disabled={!value}>Add</button>
    </form>
  );
}

export default CreateItem;
