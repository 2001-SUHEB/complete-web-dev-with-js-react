import { createSlice } from "@reduxjs/toolkit";

const initialUserState = { name: "", age: 0 };

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
  },
});

export const { setName, setAge } = userSlice.actions;
export default userSlice.reducer;
