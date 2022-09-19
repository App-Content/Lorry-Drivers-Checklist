import React from "react";
import ItemDone from "./ItemDone";

const DoneList = (props) => {
  const done = props.items.filter((item) => item.done);

  const itemsDone = done.map((item) => (
    <ItemDone
      key={item.id}
      item={item}
      text={item.itemText}
      changeItemStatus={props.changeItemStatus}
    />
  ));

  return (
    <div className="doneList">
      <h3 className="doneList__header">
        Sprawdzone <span>({done.length})</span>
      </h3>
      <table className="table table-striped mt-4">
        <thead className="doneTable__header">
          <tr>
            <th className="table__header--item">Sprawdzone</th>
            <th className="table__header--item">Ukończone</th>
          </tr>
        </thead>
        <tbody>{itemsDone}</tbody>
      </table>
    </div>
  );
};

export default DoneList;
