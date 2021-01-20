import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ROUTES } from './routeNames';
import HomePage from '../pages/HomePage/components/HomePage';
import UsersContainer from '../pages/UsersPage/containers/UsersContainer';
import UserPageContainer from '../pages/UserPage/containers/UserPageContainer';

const Routes = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.HOME} component={HomePage} />
            <Route exact path={ROUTES.USERS} component={UsersContainer} />
            <Route exact path={ROUTES.USER} component={UserPageContainer} />
            <Redirect from='*' to='/' />
        </Switch>
    );
};

export default React.memo(Routes);