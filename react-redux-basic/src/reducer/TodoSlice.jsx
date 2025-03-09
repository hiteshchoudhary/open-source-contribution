import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

const TodoSlice = createSlice({
  initialState,
  name: "todo",
  reducers: {
    setTask: (state, action) => {
      state.todo.push({ id: nanoid(), text: action.payload });
    },
    removeTask: (state, action) => {
      state.todo = state.todo.filter((item) => item.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, newTask } = action.payload;
      const task = state.todo.find((item) => item.id === id);
      if (task) {
        task.text = newTask;
      }
    },
  },
});
export const { setTask, removeTask, editTask } = TodoSlice.actions;
export default TodoSlice.reducer;
