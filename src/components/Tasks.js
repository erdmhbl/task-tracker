import Task from "./Task";

const Tasks = ({ tasks, deleteTask, toggleDone, deleteAllTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task task={task} deleteTask={deleteTask} toggleDone={toggleDone} />
      ))}
      <div className="deleteAll">
        <button
          className="btn"
          style={{ backgroundColor: "red"}}
          onClick={deleteAllTask}
        >Delete All Task List</button>
      </div>
    </div>
  );
};
export default Tasks;
