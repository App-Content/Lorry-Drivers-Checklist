import React from "react";

const ItemToDo = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>
        <button onClick={() => props.delete(props.id)}>X</button>
      </td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
  );
};

export default ItemToDo;
