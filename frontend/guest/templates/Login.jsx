import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class LoginTemplate extends React.Component {

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div>My Home</div>
        );

    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch(actionCreator)
        }
    }
}

export default connect()(LoginTemplate);