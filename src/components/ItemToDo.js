import React from "react";

const ItemToDo = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>
        <button>X</button>
      </td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
  );
};

export default ItemToDo;
