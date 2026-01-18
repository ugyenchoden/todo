export type Priority = "low" | "medium" | "high";

export interface Todo {
  id: number;
  title: string;
  priority: Priority;
  description?: string;
  completed: boolean;
  dueDate?: string;
  projectId?: string;
}
