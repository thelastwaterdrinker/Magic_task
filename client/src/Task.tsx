import React, { useEffect, useState } from "react";
import { createCard } from "./api/createCard";
import { useParams } from "react-router-dom";
import { TTask } from "./api/getTasks";
import { getTask } from "./api/getTask";
import "./Task.css";
import { deleteTasks } from "./api/deleteTasks";

export default function Task() {
  const [task, setTask] = useState<TTask | undefined>();
  const [cards, setCards] = useState<string[]>([]);
  const [text, setText] = useState("");
  const { taskId } = useParams();

  async function handleCreateTask(e: React.FormEvent) {
    e.preventDefault();
    const { cards: serverCards } = await createCard(taskId!, text);
    setCards(serverCards);
    setText("");
  }

  async function handleDeleteTask(index: number) {
    alert(index);
    /* if (!taskId) return;
    const cloneTasks = [...cards];
    cloneTasks.splice(index, 1);
    setCards(cloneTasks);
    await deleteTasks(taskId); */
  }

  useEffect(() => {
    async function fetchTask() {
      if (!taskId) return;
      const newTask = await getTask(taskId);
      setTask(newTask);
      setCards(newTask.cards);
    }
    fetchTask();
  }, [taskId]);

  return (
    <div className="Task">
      <h1>{task?.title}</h1>
      <ul className="cards">
        {cards.map((card, index) => (
          <li key={index}>
            <button onClick={() => handleDeleteTask(index)}>X</button>
            {card}
          </li>
        ))}
      </ul>
      <form onSubmit={handleCreateTask}>
        <label htmlFor="card-text">Card Text</label>
        <input
          id="card-text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
        />
        <button>Create Card</button>
      </form>
    </div>
  );
}
