// redux/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  users: [],
  loading: false,
  error: null,
};

// Async thunk for fetching users
export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (_, thunkAPI) => {
    try {
      // Simulate an API call
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve(["Alice", "Bob", "Charlie"]), 2000)
      );
      return response; // Return the fetched users
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("Failed to fetch users");
    }
  }
);

// Create the slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {}, // No need to define manual reducers for async actions
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true; // Set loading to true when request is pending
        state.error = null; // Reset error
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false when request is fulfilled
        state.users = action.payload; // Update state with fetched users
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false; // Set loading to false when request fails
        state.error = action.payload; // Update error with failure message
      });
  },
});

export default userSlice.reducer;
