import TodoItem from "./TodoItems";
const TodoList = ({ tasks, onToggleTask, ondeleteTask }) => {
  return (
    <ul>
      {tasks?.map((task) => (
        <TodoItem
          key={task.id}
          onToggleTask={onToggleTask}
          task={task}
          ondeleteTask={ondeleteTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;
