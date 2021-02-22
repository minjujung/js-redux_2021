import React from "react";
import { connect } from "react-redux";
/* //without 'createSlice()'
import { actionCreators } from "../store"; */
import { Link } from "react-router-dom";
//with 'createSlice()'
import { remove } from "../store";

function ToDo({ text, onBtnClick, id }) {
    return (
        <li>
            <Link to={`/${id}`}>
                {text}
            </Link>
            <button onClick={onBtnClick}>DEL</button>
        </li>
    );
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onBtnClick: () => dispatch(remove(ownProps.id))
    };
}

export default connect(null, mapDispatchToProps) (ToDo);