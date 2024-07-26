import { Tables } from "./supabase";

export type Todo = Tables<"todos">;

export type TodoListType = {
  todo_id: string;
  todo_title: string;
  content: string;
  created_at: string;
  todo_description: string;
  user_id: string;
  address: { lat: number; lng: number };
  event_datetime: string;
  is_done: boolean;
};
