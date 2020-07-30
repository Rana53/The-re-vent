import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react';
import {connect} from 'react-redux';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import cuid from 'cuid';
import {createEvent, updateEvent, deleteEvent} from '../eventActions';

const mapStateToProps = (state) => ({
  events: state.events
})
const actions = {
  createEvent,
  updateEvent,
  deleteEvent
}
class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
  }
  // handleFormToggle = () => {
  //   this.setState(({isOpen}) => ({
  //     isOpen: !isOpen
  //   }))
  // }
  handleCreaetFormOpen = () =>{  
    this.setState({
      isOpen: true,
      selectedEvent: null
    })
  }

  handleFormCancel = () => {
    this.setState({
      isOpen: false,
      selectedEvent: null
    });
  }
  newEventSubmit = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL= '/assets/user.png';
    this.setState({
      isOpen: false
    })
    // this.setState({
    //   events: [...this.state.events, newEvent]
    // });
    this.props.createEvent(newEvent);
  }
  
  handleUpdateEvent = (updateEvent) => {
    this.props.updateEvent(updateEvent);
    // this.setState(({events}) => ({
    //   events: events.map((event) => {
    //     if(event.id === updateEvent.id){
    //       return {...updateEvent}
    //     } else {
    //       return event;
    //     }
    //   })
    // }))
  }
  
  handleDeleteEvent = (id) => {
    this.props.deleteEvent(id);
  }
  handleSelectEvent = (event) => {
    this.setState({
      selectedEvent: event, 
      isOpen: true
    });
  }
  render() {
    const {isOpen, selectedEvent} = this.state;
    const {events} = this.props;
    console.log(this.props);
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList 
            events={events}
            selectEvent={this.handleSelectEvent}
            deleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button 
            positive 
            content='Create Event'
            onClick={this.handleCreaetFormOpen}
          />
          {
            isOpen && ( 
            <EventForm  
              key={ selectedEvent ? selectedEvent.id : 0}
              updateEvent={this.handleUpdateEvent}
              selectedEvent={selectedEvent}
              cancelForm={this.handleFormCancel}
              submitFormToEventDashbord={this.newEventSubmit}
            />
          )}
        </Grid.Column>
      </Grid>
    )
  }
}

export default connect(mapStateToProps, actions)(EventDashboard);