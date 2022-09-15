import React from "react";

const ItemToDo = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>
        <button onClick={() => props.delete(props.item.id)}>X</button>
      </td>
      <td>
        <input
          type="checkbox"
          checked={props.item.done}
          onChange={() => props.changeItemStatus(props.item.id)}
        />
      </td>
    </tr>
  );
};

export default ItemToDo;
