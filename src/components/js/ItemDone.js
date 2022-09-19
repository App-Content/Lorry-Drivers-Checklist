import React from "react";

const itemDone = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
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

export default itemDone;
