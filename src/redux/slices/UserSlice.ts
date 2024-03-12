import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type User = {
  name: string;
  email: string;
};

const initialState: User = {
  name: "Tauseef",
  email: "Tauseef@gmail.com",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (_, action: PayloadAction<User>) => {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
