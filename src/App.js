import React, { Fragment } from 'react';
import './App.css';
import EventDashboard from './features/events/EventDashboard/EventDashboard';
import NavBar from './features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Fragment> 
      <NavBar/>
      <Container className="main">
        <Route path='/events' component={EventDashboard}/>
      </Container>
    </Fragment>
  );
}

export default App;
