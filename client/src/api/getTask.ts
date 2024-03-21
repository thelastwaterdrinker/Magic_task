import { API_URL } from "./config";
import { TTask } from "./getTasks";

export async function getTask(taskId: string): Promise<TTask> {
  const response = await fetch(`${API_URL}/tasks/${taskId}`);
  return response.json();
}
