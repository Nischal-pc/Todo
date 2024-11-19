import { useState } from "react";

const TodoInput = ({ addTask }) => {
  const [taskTesk, setTaskText] = useState("");
  const handleAddTask = () => {
    addTask(taskTesk);
    console.log(taskTesk);
    setTaskText("");
  };
  return (
    <div className="mb-10">
      <div className="font-bold text-center bg-clip-text  text-xl text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        <h1>TODO APP</h1>
      </div>
      <div className="flex justify-center mt-5">
        <input
          type="text"
          value={taskTesk}
          className=" border-solid border-2 border-blue-600 text-black rounded-lg w-1/3 h-16 px-3"
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter a task"
        />
        <button
          disabled={!taskTesk.trim()}
          className="rounded-lg h-16 bg-blue-700 text-white px-3 ml-5"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
