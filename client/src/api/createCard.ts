import { API_URL } from "./config";
import { TTask } from "./getTasks";

export async function createCard(taskId: string, text: string): Promise<TTask> {
  const response = await fetch(`${API_URL}/tasks/${taskId}/cards`, {
    method: "POST",
    body: JSON.stringify({
      text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
