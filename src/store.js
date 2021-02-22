import { createStore } from "redux";
import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";

//with 'createSlice()'
const toDos = createSlice({
    name: "toDoReducer",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() });
        },
        remove: (state, action) => 
            state.filter(toDo => toDo.id !== action.payload)
    }
})

console.log(toDos.reducer);

const store = configureStore({ reducer: toDos.reducer });

export const {add, remove } = toDos.actions;

export default store;

// //with redux toolkit, without 'createSlice()'
// const addTodo = createAction("ADD");
// const deleteTodo = createAction("DELETE");

// const reducer = createReducer([], {
//     [addTodo]: (state, action) => {
//         state.push({ text: action.payload, id: Date.now() });
//     },
//     [deleteTodo]: (state, action) => 
//         state.filter(toDo => toDo.id !== action.payload)
// }); 

// /* const reducer = (state = [], action) => {
//     switch(action.type) {
//         case addTodo.type:
//             return[...state, { text: action.payload, id: Date.now() }];
//         case deleteTodo.type:
//             return state.filter(toDo => toDo.id !== action.payload );
//         default:
//             return state;
//     }
// };
//  */
// const store = configureStore({ reducer });

// export const actionCreators = {
//     addTodo,
//     deleteTodo
// };

// export default store;




/* //without toolkit
const ADD ="ADD";
const DELETE = "DELETE";

const addTodo = (text) => {
    return {
        type: ADD,
        text
    };
};

const deleteTodo = (id) => {
    return {
        type: DELETE,
        id: parseInt(id)
    };
};

const reducer = (state = [], action) => {
    switch(action.type) {
        case ADD:
            return[...state, { text: action.text, id: Date.now() }];
        case DELETE:
            return state.filter(toDo => toDo.id !== action.id );
        default:
            return state;
    }
};

const store = createStore(reducer);

export const actionCreators = {
    addTodo,
    deleteTodo
};

export default store; */