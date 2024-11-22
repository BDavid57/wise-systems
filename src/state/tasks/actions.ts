import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateTaskDto, EditTaskDto, Task } from "../../features/tasks/models";
import { v4 as uuidv4 } from "uuid";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  return tasks as Task[];
});

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (taskData: CreateTaskDto) => {
    const task = {
      id: uuidv4(),
      ...taskData,
    };
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const updatedTasks = [...tasks, task];

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    return task;
  }
);

export const editTask = createAsyncThunk(
  "tasks/editTask",
  async (updatedTask: EditTaskDto) => {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const updatedTasks = tasks.map((task: Task) =>
      task.id === updatedTask.id ? updatedTask : task
    );

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    return updatedTask;
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id: string) => {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const updatedTasks = tasks.filter((task: Task) => task.id !== id);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    return id;
  }
);
