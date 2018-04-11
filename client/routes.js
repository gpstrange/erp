// Client

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Auth from './components/common/auth';
import HomePage from './components/pages/home';
import TweetPage from './components/pages/tweet';
import UserLogin from './components/user/login';
import staffLogin from './components/staff/login';
import UserRegister from './components/user/register';
import UserProfile from './components/user/profile';
import addEvent from './components/pages/addEvent';
import StudentHomePage from './components/pages/studentHome';

export default (
    <Route path="/" component={ App }>
        <IndexRoute component={ UserLogin } />
        <Route path="leaveForm" component={ Auth(TweetPage) } />
        <Route path="login" component={ UserLogin } />
        <Route path="register" component={ UserRegister } />
        <Route path="staffLogin" component={staffLogin} />
        <Route path="profile/:username(/:page)" component={ UserProfile } />
        <Route path="home" component={ StudentHomePage } />
        <Route path="staff" component={HomePage} />
        <Route path="addEvent" component={addEvent} />
    </Route>
)