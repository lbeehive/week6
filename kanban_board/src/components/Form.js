import React, { useState } from "react";


function Form(props) {
    const [name, setName] = useState('')

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }
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
      
      
    </div>
    )
    
}

export default Form;