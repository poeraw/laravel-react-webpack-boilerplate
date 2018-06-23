import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';


import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

import HomeTemplate from './templates/Home.jsx';

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
                            <Route path="/login"/>
                            <Route path="/register"/>
                            <Route path="/tos"/>
                        </Switch>
                    </Router>
                </div>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));