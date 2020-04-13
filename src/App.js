import React, { Fragment } from 'react';
import './App.css';
import NavBar from './features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

import  HomePage  from './features/home/HomePage';
import EventDashboard from './features/events/EventDashboard/EventDashboard';
import EventDetailedPage from './features/events/EventDetailed/EventDetailedPage';
import PeopleDashboard from './features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from './features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from './features/user/Seetings/SettingsDashboard';
import EventForm from './features/events/EventForm/EventForm';

function App() {
  return (
    <Fragment> 
      <NavBar/>
      <Container className="main">
        <Route path='/' exact component={HomePage}/>
        <Route path='/events' component={EventDashboard}/>
        <Route path='/events/:id' component={EventDetailedPage}/>
        <Route path='/people' component={PeopleDashboard}/>
        <Route path='/profile/:id' component={UserDetailedPage}/>
        <Route path='/seetings' component={SettingsDashboard}/>
        <Route path='/createEvent' component={EventForm}/>
      </Container>
    </Fragment>
  );
}

export default App;
