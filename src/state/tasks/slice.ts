import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTasks, addTask, editTask, deleteTask } from "./actions";
import { EditTaskDto, Task } from "../../features/tasks/models";

type TaskState = {
  tasks: Task[];
  loading: boolean;
  error: string | null;
};

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    clearTasks: (state) => {
      state.tasks = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchTasks.fulfilled,
      (state, action: PayloadAction<Task[]>) => {
        state.loading = false;
        state.tasks = action.payload;
      }
    );
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch tasks";
    });

    builder.addCase(addTask.fulfilled, (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    });

    builder.addCase(
      editTask.fulfilled,
      (state, action: PayloadAction<EditTaskDto>) => {
        state.tasks = state.tasks.map((task: Task) =>
          task.id === action.payload.id
            ? { createDate: task.createDate, ...action.payload }
            : task
        );
      }
    );

    builder.addCase(
      deleteTask.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.tasks = state.tasks.filter(
          (task: Task) => task.id !== action.payload
        );
      }
    );
  },
});

export const { clearTasks } = taskSlice.actions;
export default taskSlice.reducer;
