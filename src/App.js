import React from "react";
import { useState } from "react";
import "./App.css";
import { Task, DoneTask, Header } from "./Task";

function App() {
  let [tasks, setTasks] = useState([]);
  let [doneTasks, setDoneTasks] = useState([]);
  let [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    console.log("Added", newTask, "\nList: ", tasks);
    document.getElementById("task_input").value = "";
  };

  const doneTask = (event) => {
    const newTasks = [...tasks];
    const newDoneTask = tasks[event.target.id];
    const newDoneTasks = [...doneTasks, newDoneTask];

    setDoneTasks(newDoneTasks);
    console.log("event id: ", event.target.id);
    console.log("Done Tasks: ", newDoneTasks);

    newTasks.splice(event.target.id, 1);
    setTasks(newTasks);
  };

  const cancelTask = (event) => {
    const newTasks = tasks.splice(event.target.id, 1);
    setTasks(newTasks);
  };
  return (
    <div className="App">
      <Header handleChange={handleChange} addTask={addTask} />
      <div className="tasks">
        {tasks.map((task, key) => {
          return (
            <Task
              id={key}
              task={task}
              doneTask={doneTask}
              cancelTask={cancelTask}
            />
          );
        })}
      </div>
      <div className="doneTasks">
        <h1>Tasks Done! 👇</h1>
        {doneTasks.map((task, key) => {
          return <DoneTask id={key} task={task} />;
        })}
      </div>
    </div>
  );
}

export default App;
