import React from "react";
import ItemToDo from "./ItemToDo";

const TodoList = (props) => {
  const itemList = props.items.map((item) => (
    <ItemToDo key={item.id} text={item.itemText} delete={props.delete} />
  ));

  return (
    <div className="todoList">
      <h3 className="todoList__header">
        Sprawdź <span>({props.items.length})</span>
      </h3>
      <table className="table table-striped mt-4">
        <thead className="table__header">
          <tr>
            <th className="table__header--item">Do sprawdzenia</th>
            <th className="table__header--item">Usuń</th>
            <th className="table__header--item">Ukończone</th>
          </tr>
        </thead>
        <tbody>{itemList}</tbody>
      </table>
    </div>
  );
};

export default TodoList;
