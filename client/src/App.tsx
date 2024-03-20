import { useEffect, useState } from "react";
import "./App.css";
import { AiOutlinePlus } from "react-icons/ai";

type TTask = {
  title: string;
  id: string;
};

function App() {
  const [tasks, setTasks] = useState<TTask[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  function handleSubmitNewTodo(e: React.FormEvent) {
    e.preventDefault();
    fetch("http://localhost:5000/tasks", {
      method: "POST",
      body: JSON.stringify({
        title: newTaskTitle,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setNewTaskTitle("");
  }

  useEffect(() => {
    async function fetchTasks() {
      const response = await fetch("http://localhost:5000/tasks");
      const newTasks = await response.json();
      setTasks(newTasks);
    }
    fetchTasks();
  }, []);

  return (
    <>
      <button onClick={() => {}} className="new-task-button">
        Add new task <AiOutlinePlus size={18} />
      </button>
      <div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSubmitNewTodo}>
        <h3 className="font-bold text-lg">Add new task</h3>
        <div className="modal-action flex-col gap-5">
          <label
            htmlFor="task-title"
            className="ml-3 input input-bordered flex items-center justify-between gap-2"
          >
            <span>Title</span>
            <input
              id="taks-title"
              value={newTaskTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setNewTaskTitle(e.target.value);
              }}
              type="text"
              className="grow"
              placeholder="Create Software Specification for the New Project"
            />
          </label>
        </div>
        <input type="submit" value="Save" className="btn" />
      </form>
    </>
  );
}

export default App;
