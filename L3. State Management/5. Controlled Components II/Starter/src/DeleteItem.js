import React from "react";

function DeleteItem({ onClick, items }) {
  return (
    <button onClick={onClick} disabled={items.length === 0}>
      Delete Last Item
    </button>
  );
}

export default DeleteItem;
