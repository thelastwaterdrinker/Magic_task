import React from "react";
import TaskList from "./(components)/TaskList";
import { API_URL } from "./(components)/config";

const getTasks = async () => {
  try {
    const res = await fetch(`${API_URL}/api/Tasks`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const Dashboard = async () => {
  const data = await getTasks();

  if (!data?.tasks) {
    return <p>No tasks.</p>;
  }

  const tasks = data.tasks;

  const uniqueCategories = [...new Set(tasks?.map(({ category }) => category))];

  return (
    <div className="p-5">
      <div>
        <div>
          <TaskList tasks={tasks} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
