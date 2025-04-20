import React, { useState } from "react";
import styles from "./ToDo.module.css";
function ToDo() {
  const [tasks, setTasks] = useState(["wash the dishess", "do your homework"]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    setTasks((tasks) => [...tasks, newTask]);
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
            <button className={styles.delete}>Delete</button>
            <button className={styles.done}>Done!</button>
            <button className={styles.moveup}>👆</button>
            <button className={styles.movedown}>👇</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDo;
