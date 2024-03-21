import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createTasks } from "./api/createTasks";
import { deleteTasks } from "./api/deleteTasks";
import { TTask, getTasks } from "./api/getTasks";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState<TTask[]>([]);
  const [title, setTitle] = useState("");

  async function handleCreateTask(e: React.FormEvent) {
    e.preventDefault();
    const task = await createTasks(title);
    setTasks([...tasks, task]);
    setTitle("");
  }

  async function handleDeleteTask(taskId: string) {
    await deleteTasks(taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    async function fetchTasks() {
      const newTasks = await getTasks();
      setTasks(newTasks);
    }
    fetchTasks();
  }, []);

  return (
    <div className="container">
      <div className="App">
        <h1>Add Your Task</h1>

        <ul className="tasks">
          {tasks.map((task) => (
            <li key={task.id}>
              <button onClick={() => handleDeleteTask(task.id)}>X</button>

              <Link to={`tasks/${task.id}`}>{task.title}</Link>
            </li>
          ))}
        </ul>
        <form onSubmit={handleCreateTask}>
          <label htmlFor="task-title">Task Title</label>
          <input
            id="task-title"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
            }}
          />
          <button>Create Task</button>
        </form>
      </div>
    </div>
  );
}

export default App;
