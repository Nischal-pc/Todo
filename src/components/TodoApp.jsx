import { useEffect, useState } from "react";
import { EditContext } from "../context/Context";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
const TodoApp = () => {
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("tasks");
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.error("Failed to parse the date from the local storage", error);
    }
  });
  const [editTasks, setEditTasks] = useState([]);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("this is useEffect hook in action");
  }, [tasks]);

  //Adding the input from the input field to the task
  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
      Edit: false,
    };
    setTasks((prevTasks) =>
      Array.isArray(prevTasks) ? [...prevTasks, newTask] : [newTask]
    );
    console.log(tasks);
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id == id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const onEditTasks = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id == id ? { ...task, Edit: !task.Edit } : task
      )
    );
    console.log(editTasks);
  };
  const onSaveTasks = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id == id ? { ...task, text: editTasks, Edit: !task.Edit } : task
      )
    );
    console.log(editTasks);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log(tasks);
  };
  return (
    <EditContext.Provider
      value={{ editTasks, setEditTasks, onEditTasks, onSaveTasks }}
    >
      <TodoInput addTask={addTask} />
      <TodoList
        tasks={tasks}
        onToggleTask={toggleTask}
        ondeleteTask={deleteTask}
      />
    </EditContext.Provider>
  );
};

export default TodoApp;
