import React, { useState, useEffect } from "react";
import styles from "./ToDo.module.css";
function ToDo() {
  // give the tasks form local storage
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  // a useState for each new task
  const [newTask, setNewTask] = useState("");

  // every time the tasks array changed save it in local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // add new task func
  const addTask = () => {
    // if the newTask is not empty and without any spaces add the task
    if (newTask && newTask.trim()) {
      setTasks((tasks) => [...tasks, newTask]);
      setNewTask("");
    }
  };

  // func for delete task
  const deleteHandeler = (index) => {
    setTasks(tasks.filter((task, i) => index !== i));
  };
  // func for moving up a task
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
  // func for moving down a task
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
  // when user click the Enter button add task
  const keyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };
  return (
    <div className={styles.container}>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Enter New Task ..."
        value={newTask}
        onKeyDown={keyDown}
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
