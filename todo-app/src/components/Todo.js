import React from "react";

function Todo(props) {
    return (
      <div className="container">
      <form onSubmit={handleSubmit}>
        <h2 className="label_wrapper">
          <label htmlFor="new_td_inputs" className="label_td">
            To Do Items
          </label>
        </h2>
        <input type="text"
                 id="'new_td_input"
                 className="td_input_lg"
                 name="text"
                 autoComplete="off"
                 value={name}
                 onChange={handleChange}
        />
        <button type="submit" className="btn_submit">
          Add
        </button>
      </form>
        <li className="listitem_td">
              <div className="cbox">
                <input id={props.id} type="checkbox" defaultChecked={props.completed} />
                <label className="td_label" htmlFor={props.id}>
                  {props.name}
                </label>
              </div>
              <div className="btn_group">
                <button type="button" className="btn_td">
                  Edit <span className="visually-hidden">{props.name}</span>
                </button>
                <button type="button" className="btn_danger">
                  Delete <span className="visually-hidden">{props.name}</span>
                </button>
              </div>
            </li>
            </div>
    );

}





export default Todo;