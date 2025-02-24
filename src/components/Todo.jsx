import { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTaskToList = (event) => {
    event.preventDefault();
    if (newTask.trim() === "") return;

    setTasks((prevTasks) => [
      ...prevTasks,
      { task: newTask, taskid: prevTasks.length + 1 },
    ]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((item) => item.taskid !== id));
  };

  return (
    <div className="todo m-10">
      <h1 className="text-3xl font-semibold text-center">To-Do App</h1>
      <form
        onSubmit={addTaskToList}
        className="flex gap-4 mt-10 justify-center"
      >
        <input
          className="border border-gray-400 rounded w-64 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Task
        </button>
      </form>

      <div className="mt-8">
        <ul className="flex flex-col gap-3 w-full max-w-md mx-auto">
          {tasks.map((item) => (
            <li
              key={item.taskid}
              className="flex justify-between items-center p-4 bg-white border border-gray-300 rounded-lg shadow-md"
            >
              <span className="text-lg text-gray-800">{item.task}</span>
              <button
                onClick={() => deleteTask(item.taskid)}
                className="text-red-500 hover:text-red-700 focus:outline-none"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
