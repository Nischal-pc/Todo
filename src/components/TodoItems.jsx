import { useContext } from "react";
import { EditContext } from "../context/Context";
const TodoItem = ({ task, onToggleTask, ondeleteTask }) => {
  const { editTasks, setEditTasks, onEditTasks, onSaveTasks } =
    useContext(EditContext);
  return (
    <li>
      <div className="flex justify-center mt-3  mb-3">
        <div className="bg-clip-text text-center text-xl text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
          {task.Edit ? (
            <>
              <input
                type="text"
                className="bg-clip-text  text-xl text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
                onChange={(e) => setEditTasks(e.target.value)}
                value={editTasks}
              />
              <span className="px-3">
                <button
                  className="rounded-lg  bg-blue-700 text-white h-10  px-3"
                  onClick={() => onSaveTasks(task.id)}
                >
                  Save
                </button>
              </span>
              <span>
                <button
                  className="rounded-lg  bg-blue-700 text-white h-10  px-3"
                  onClick={() => ondeleteTask(task.id)}
                >
                  Delete
                </button>
              </span>
            </>
          ) : (
            <>
              <strong>{task.text}</strong>
              <span className="px-3">
                <button
                  className="rounded-lg  bg-blue-700 text-white h-10  px-3"
                  onClick={() => onEditTasks(task.id)}
                >
                  Edit
                </button>
              </span>
              <span>
                <button
                  className="rounded-lg  bg-blue-700 text-white h-10  px-3"
                  onClick={() => ondeleteTask(task.id)}
                >
                  Delete
                </button>
              </span>
            </>
          )}
        </div>
        {/* <span className="mx-3 items-center">
          <button
            className="rounded-lg  bg-blue-700 text-white h-10  px-3"
            onClick={() => onToggleTask(task.id)}
          >
            {task.completed ? "Undo" : "Complete"}
          </button>
        </span> */}
        {/* <span className="px-3">
          <button
            className="rounded-lg  bg-blue-700 text-white h-10  px-3"
            onClick={() => onEditTasks(task.id)}
          >
            {task.Edit ? "Save" : "Edit"}
          </button>
        </span>

        <span>
          <button
            className="rounded-lg  bg-blue-700 text-white h-10  px-3"
            onClick={() => ondeleteTask(task.id)}
          >
            Delete
          </button>
        </span> */}
      </div>
    </li>
  );
};

export default TodoItem;
