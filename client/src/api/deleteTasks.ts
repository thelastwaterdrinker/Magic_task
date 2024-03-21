import { API_URL } from "./config";

export async function deleteTasks(taskId: string) {
  await fetch(`${API_URL}/tasks/${taskId}`, {
    method: "DELETE",
  });
}
