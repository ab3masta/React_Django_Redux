import React, { Component, Fragment } from 'react';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Alerts from './layout/Alerts';
import Login from './accounts/Login';
import Register from './accounts/Register';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import store from '../store';
import { Provider } from 'react-redux';
import PrivateRoute from './common/PrivateRoute';
import { loadUser } from '../actions/auth';

//Alert Options
const alertOptions = {
    timeout: 3000,
    position: 'top center'
}
class App extends Component {
    componentDidMount(){
        store.dispatch(loadUser());
    };
    
    render() {
        return (
            
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header />
                            <Alerts />
                            <div className="container">
                                <Switch>
                                    <PrivateRoute exact path="/" component={Dashboard} />
                                    <Route exact path="/login" component={Login} />
                                    <Route exact path="/register" component={Register} />

                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>

            
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));
