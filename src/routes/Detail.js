import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Detail({ toDo, deleteInDetail }) {
    console.log(toDo);
    const history = useHistory();
    
    const onDelClick = () => {
        deleteInDetail(toDo?.id);
        history.goBack();
    }
    return (
         <>
            <h1>{toDo?.text}</h1>
            <h5>Created at: {toDo?.id}</h5>
            <button onClick={onDelClick}>Del</button>
        </>
    );
}

function mapStateToProps(state, ownProps) {
    const{ 
        match: {
            params: { id }
        }
    } = ownProps;
    return{ toDo: state.find(toDo => toDo.id === parseInt(id)) };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        deleteInDetail: (id) => dispatch(actionCreators.deleteTodo(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Detail);