import { API_URL } from "./config";

export type TTask = {
  title: string;
  cards: string[];
  id: string;
};

export async function getTasks(): Promise<TTask[]> {
  const response = await fetch(`${API_URL}/tasks`);
  return response.json();
}
