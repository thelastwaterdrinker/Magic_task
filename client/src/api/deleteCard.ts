import { API_URL } from "./config";
import { TTask } from "./getTasks";

export async function deleteCard(
  taskId: string,
  index: number
): Promise<TTask> {
  const response = await fetch(`${API_URL}/tasks/${taskId}/cards/${index}`, {
    method: "DELETE",
  });
  return response.json();
}
