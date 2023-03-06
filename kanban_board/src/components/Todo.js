import React from "react";
import { format } from 'date-fns';

function Todo(props) {
  const displayDate = format(new Date(props.date), "MM-dd-yyyy");
  //const displayDate = Date(props.date).valueOf().toString();
    return (
      <li className="todo stack-small">
      <div className="c-cb">
      <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
        {displayDate}: {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button type="button" className="btn btn__danger" onClick={() => props.deleteTask(props.id)}>
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
    );

}


export default Todo;