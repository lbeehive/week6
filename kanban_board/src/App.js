import React, { useState } from "react";
import Form from "./components/Form";
import SearchButton from "./components/SearchButton";
import Todo from "./components/Todo";

const uniqueId = () => parseInt(Date.now() * Math.random()).toString();



function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    const newTask = { id: uniqueId, name, completed: false, key: uniqueId};
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    console.log(tasks[0])
  }

  const taskList = props.tasks.map((task) =>(
    <Todo 
      id={task.id}
      name={task.name} 
      completed={task.completed}
      key={uniqueId} 
      toggleTaskCompleted={toggleTaskCompleted}
      />
    )
  );
  
  return (
    <div className="td_overall">
      <h1>My To Do List</h1>
        
        <Form addTask={addTask} />

        <h2 className="label_wrapper">
          <label htmlFor="new_td_inputs" className="label_td">
            To Do Items
          </label>
        </h2>
         
        <ul 
          className="list_td"
          aria-labelledby="list_heading"
        >
            {taskList}
        </ul>
    <div className="search_button">
          <SearchButton />
    </div>  
    </div>
  );
}

export default App;
