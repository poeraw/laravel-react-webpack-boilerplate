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
            console.log('save')
        });
    }

    render(){

        return(
            <div>My Home
                <Link to="/login">A</Link>
                <p onClick={ this.request.bind(this) }>Click</p>
                <p onClick={ this.props.eActions.successRequest }>Click 2</p>
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