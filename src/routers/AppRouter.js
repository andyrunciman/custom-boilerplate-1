import React from 'react';
import {Router, Route,Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Dashboard from '../components/Dashboard';
import Help from '../components/Help';
import NotFound from '../components/NotFound';
import Login from '../components/Login';
import PrivateRoute from '../hoc/PrivateRouter';
import PublicRoute from '../hoc/PublicRouter';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <React.Fragment>
            <Switch>
                <PublicRoute path="/" component={Login} exact/>
                <PrivateRoute path="/dashboard" component={Dashboard} exact/>
                <Route path="/help" component={Help}/>
                <Route component={NotFound}/>
            </Switch>
        </React.Fragment>        
    </Router>
)

export default AppRouter;