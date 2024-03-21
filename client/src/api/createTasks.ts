import { API_URL } from "./config";

export async function createTasks(newTaskTitle: string) {
  const response = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    body: JSON.stringify({
      title: newTaskTitle,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
