import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);


// Js-Redux
// import { createStore } from "redux";
// const input = document.querySelector("input");
// const form = document.querySelector("form");
// const ul = document.querySelector("ul");

// const ADD_TODO = "ADD_TODO"
// const DELETE_TODO = "DELETE_TODO"

// const addTodo = (text) => {
//   return {
//     type: ADD_TODO, text 
//   }
// }

// const deleteTodo = (id) => {
//   return {
//     type: DELETE_TODO, id 
//   }
// }

// //Don't Mutate state!!! just make new state(object)!!
// //and then return new state!
// //'filter()' creates a new array with all elements that pass
// //the test implemented by the provieded function
// const reducer = (state = [], action) => {
//   switch(action.type) {
//     case ADD_TODO:
//       const newTodo = { text: action.text, id: Date.now() };
//       return [...state, newTodo];
//       case DELETE_TODO:
//         return state.filter(toDo => toDo.id !== action.id );
//         default: 
//         return state;
//       }
//     };
    
// const store = createStore(reducer);

// store.subscribe(() => console.log(store.getState()));

// const dispatchAddTodo = (text) => {
//   store.dispatch(addTodo(text));
// }
    
// const dispatchDeleteTodo = (e) => {
//   const id = parseInt(e.target.parentNode.id);
//   store.dispatch(deleteTodo(id));
// }    

// const paintTodos = () => {
//   const toDos = store.getState();
//   ul.innerHTML = "";
//   toDos.forEach(toDo => {
//     const li = document.createElement("li");
//     const btn = document.createElement("button");
//     btn.innerText = "DEL";
//     btn.addEventListener('click', dispatchDeleteTodo);
//     li.id = toDo.id;
//     li.innerText = toDo.text;
//     li.appendChild(btn);
//     ul.appendChild(li); 
//   });
// }

// store.subscribe(paintTodos);


// const onSubmit = e => {
//   e.preventDefault();
//   const toDo = input.value;
//   input.value = "";
//   dispatchAddTodo(toDo);
// };

// form.addEventListener("submit", onSubmit);


// //The best part of redux is basically in one place only
// import { createStore } from "redux";

// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");

// number.innerText = 0;

// const ADD = "ADD";
// const MINUS = "MINUS";

// //'countModifier(reducer)' is a function which modifies the data
// //it returns current state of data in application and 'action'
// //put message from 'dispatch' into 'action' arguemnt
// const countModifier = (count = 0, action) => {
//   switch (action.type) {
//     case ADD:
//       return count + 1;
//     case MINUS:
//       return count - 1;
//     default:
//       return count;
//   }
//   // if(action.type === "ADD") {
//   //   return count + 1;
//   // } else if(action.type === "MINUS") {
//   //   return count - 1;
//   // } else {
//   //   return count;
//   // }
// };

// const countStore = createStore(countModifier);

// //whenever this store changes, excute(변하지 않는) the function
// //여기서 변하지 않는 fucntion은 html에 지금 상태를 나타내주는 
// //'number.innerText = countStore.getState();'
// const onChange = () => {
//   number.innerText = countStore.getState();
// }

// //'subscribe' listens for changes in 'countStore'
// countStore.subscribe(onChange);

// //'dispatch': sending message to 'countModifier'
// //'action' need to be object and must have 'type'
// const handleAdd = () => {
//   countStore.dispatch({ type: ADD });
// }

// const handleMinus = () => {
//   countStore.dispatch({ type: MINUS });
// }

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);

// // redux 없이 한 것
// // let count = 0;
// // number.innerText = count;

// // const updateText = () => {
// //   number.innerText = count;
// // }

// // const handleAdd = () => {
// //   count = count + 1;
// //   updateText();
// // };

// // const handleMinus = () => {
// //   count = count - 1;
// //   updateText();
// // };

// // add.addEventListener("click", handleAdd);
// // minus.addEventListener("click", handleMinus);