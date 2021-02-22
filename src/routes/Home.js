import React, { useState } from "react";
import { connect } from "react-redux";
/* //without 'createSlice()'
import { actionCreators } from "../store"; */
import ToDo from "../components/ToDo";
//with 'createSlice()'
import { add } from "../store";


function Home({ toDos, addTodo }) {
    const [text, setText] = useState("");
    function onChange(e) {
        setText(e.target.value);
    }
    function onSubmit(e) {
        e.preventDefault();
        addTodo(text);
        setText("");
    }
    return(
        <>
            <h1>To Do List</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add:D</button>
            </form>
            <ul>
                {toDos.map(toDo => 
                    <ToDo {...toDo} key={toDo.id}/>)}
            </ul>
        </>
    );
}

//'connect()' allow me to intercept the props that will go to 'Home'
function mapStateToProps(state) {
    return{ toDos: state };
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: (text) => dispatch(add(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);