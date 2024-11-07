import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    input: ""
};

const todoSlice = createSlice({
    name: "todoReducer",
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            state.todos.push({ id: Date.now(), title: action.payload });
        },
        delete: (state, action) => {
             
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        edit: (state, action) => {
            // Fix: Modify the todo array directly or use map with return
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id
                    ? { ...todo, title: action.payload.title }
                    : todo
            );
        }
    }
});

// Destructure and export the actions
export const { add, delete: deleteTodo, edit } = todoSlice.actions;

export default todoSlice.reducer;
