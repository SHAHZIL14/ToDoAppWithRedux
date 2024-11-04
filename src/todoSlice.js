import { createSlice, nanoid } from "@reduxjs/toolkit";

export const initialState = {
    todos: [
        
    ]
};

export const todoSlice = createSlice({
    name: "TODO",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                todoTitle: action.payload,
                todoId: nanoid(),
                isComplete: "false"
            };
            state.todos.push(newTodo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((eachTodo) => (eachTodo.todoId !== action.payload));
        }
    }
});

export const {addTodo,removeTodo} = todoSlice.actions;

export const  todoReducer =  todoSlice.reducer;