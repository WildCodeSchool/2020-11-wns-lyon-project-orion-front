import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Header from './containers/Header';
import Users from './pages/Users';
import Studies from './pages/Studies';
import Calendar from './pages/Studies/Calendar';
import Medias from './pages/Studies/Medias';
import Quiz from './pages/Studies/Quiz';
import ReplyQuiz from './pages/Studies/Quiz/components/ReplyQuiz';
import Profile from './pages/Account/Profile';
import Parameters from './pages/Account/Parameters';
import Notifications from './pages/Notifications';
import { IsAuthenticated } from './core/store/auth/auth.selectors';
import Welcome from './pages/Welcome';

function App() {

    const isAuthenticated = useSelector(IsAuthenticated);

    return <BrowserRouter>
        <Switch>
            <Route exact path='/welcome' render={() => !isAuthenticated ? <Welcome /> : <Redirect to='/' />} />
            <Route render={() => isAuthenticated
                ? <>
                    <Header />
                    <Route exact path='/' component={Home} />
                    <Route exact path='/users' component={Users} />

                    <Route path='/studies' render={() => <Studies>
                        <Route exact path='/studies' component={Calendar} />
                        <Route exact path='/studies/medias' component={Medias} />
                        <Route exact path='/studies/quiz' component={Quiz} />
                        <Route exact path='/studies/answer' component={ReplyQuiz} />
                    </Studies>} />

                    <Route path='/account' render={() => <>
                        <Route exact path='/account' component={Profile} />
                        <Route exact path='/account/parameters' component={Parameters} />
                    </>} />

                    <Route exact path='/notifications' component={Notifications} />
                </>
                : <Redirect to='/welcome' />} />
        </Switch>
    </BrowserRouter>;
}

export default App;
