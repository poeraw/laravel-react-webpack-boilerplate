import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as reqExample from '../redux/actions/request.js';

class HomeTemplate extends React.Component {

    constructor(props){
        super(props);
    }

    request(e){
        e.preventDefault()
        console.log('requesting')
        this.props.eActions.loadRequest().then(() => {
            // promise
            console.log('save')
        });
    }

    render(){

        return(
            <div>
                <b>My Home</b> | <Link to="/login">Login</Link> | <Link to="/register">Register</Link><br />
                <button onClick={ this.request.bind(this) }>Test Click : Axios Middleware - Open developer console for response</button>
            </div>
        );

    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.example
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        eActions : bindActionCreators(reqExample, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeTemplate);