import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';


import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

import HomeTemplate from './templates/Home.jsx';
import LoginTemplate from './templates/Login.jsx';
import RegisterTemplate from './templates/Register.jsx';

class App extends React.Component {

    constructor(props){        
        super(props);
    }

    render(){
        return (
            <Provider store={ store }>
                <div>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={ HomeTemplate }/>
                            <Route path="/login" component={ LoginTemplate }/>
                            <Route path="/register" component={ RegisterTemplate }/>
                            <Route path="/tos"/>
                        </Switch>
                    </Router>
                </div>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));