import React from 'react';
import { Link } from 'react-router-dom';

export default class HomeTemplate extends React.Component {

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div>My Home
                <Link to="/login">A</Link>
            </div>
        );

    }

}