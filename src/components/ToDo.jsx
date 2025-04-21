import React, { useState } from "react";
import styles from "./ToDo.module.css";
function ToDo() {
  const [tasks, setTasks] = useState(["wash the dishess", "do your homework"]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask) {
      setTasks((tasks) => [...tasks, newTask]);
    }
  };
  const deleteHandeler = (index) => {
    setTasks(tasks.filter((task, i) => index !== i));
  };
  const moveUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };
  const moveDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };
  return (
    <div className={styles.container}>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Enter New Task ..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className={styles.add} onClick={addTask}>
        Add
      </button>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className={styles.text}>{task}</span>
            <button
              className={styles.delete}
              onClick={() => deleteHandeler(index)}
            >
              Delete
            </button>
            <button className={styles.moveup} onClick={() => moveUp(index)}>
              👆
            </button>
            <button className={styles.movedown} onClick={() => moveDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDo;
