import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Task = {
  title: string;
  description: string;
  isCompleted: boolean;
  userId: string;
  createdAt: string;
  _id: string;
};

const initialState: Task[] = [
  {
    title: "Task",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sapiente tenetur! Animi autem dicta, doloribus ut, nihil quaerat quod vitae soluta commodi, consequuntur nobis neque recusandae ipsam dolore odit facilis explicabo cum!",
    isCompleted: false,
    userId: "1",
    createdAt: "2443",
    _id: "2",
  },
];

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTasks: (_, action: PayloadAction<Task[]>) => {
      return action.payload;
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
    deleteTaskRedux: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const filter = state.filter((task) => task._id !== id);
      return filter;
    },
    updateTaskRedux: (
      state,
      action: PayloadAction<{ id: string; body: Task }>
    ) => {
      const { id, body } = action.payload;
      const temp = [...state];
      const tasktoupdate = temp.findIndex((task) => task._id == id);
      if (tasktoupdate != -1) {
        temp[tasktoupdate] = body;
      }
      return temp;
    },
  },
});

export const { setTasks, addTask, deleteTaskRedux, updateTaskRedux } =
  taskSlice.actions;
export default taskSlice.reducer;
