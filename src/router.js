import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from 'react-router-dom';
import ExampleComponent from './common/ExampleComponent';
import {
    ROUTE_CREATE_ACCOUNT,
    ROUTE_HOME,
    ROUTE_SIGNUP,
} from './routeConstants';
import { withMainLayout } from './layout/withMainLayout';
import Home from './common/Home';
import SignUp from './common/SignUp';

const loggedIn = true;

function MainRouter({ history }) {
    return (
        <Router history={history}>
            {loggedIn && (
                <Switch>
                    <Route path={ROUTE_HOME}>{withMainLayout(<Home />)}</Route>
                    <Route path={ROUTE_SIGNUP}>
                        {withMainLayout(<SignUp />)}
                    </Route>
                    <Redirect to={ROUTE_HOME} />
                </Switch>
            )}
            {!loggedIn && (
                <Switch>
                    <Route path={ROUTE_CREATE_ACCOUNT}>
                        {withMainLayout(<ExampleComponent />)}
                    </Route>
                    <Redirect to={ROUTE_CREATE_ACCOUNT} />
                </Switch>
            )}
        </Router>
    );
}

export default MainRouter;
