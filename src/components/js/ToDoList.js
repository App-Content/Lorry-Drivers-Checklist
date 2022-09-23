import React from "react";
import ItemToDo from "./ItemToDo";

const TodoList = (props) => {
  const active = props.items.filter((item) => !item.done);

  const itemsTodo = active.map((item) => (
    <ItemToDo
      key={item.id}
      item={item}
      text={item.itemText}
      delete={props.delete}
      changeItemStatus={props.changeItemStatus}
    />
  ));

  return (
    <div className="todoList">
      <h3 className="todoList__header">
        Sprawdź <span>({active.length})</span>
      </h3>
      <table className="table table-striped mt-4">
        <thead className="table__header">
          <tr>
            <th className="table__header--item">Do sprawdzenia</th>
            <th className="table__header--item">Usuń</th>
            <th className="table__header--item">Ukończone</th>
          </tr>
        </thead>
        <tbody data-test-id="toDoItems">
          {active.length > 0 ? itemsTodo : "Wszystko sprawdzone!"}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
