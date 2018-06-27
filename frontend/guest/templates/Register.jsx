import React from 'react';
import { connect } from 'react-redux';

class RegisterTemplate extends React.Component {

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div></div>
        )

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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterTemplate);