import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Segment, Form, Button } from 'semantic-ui-react'
import {createEvent, updateEvent, deleteEvent} from '../eventActions';
import cuid from 'cuid';
const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: ''
  }
  if(eventId && state.events.length > 0){
    event = state.events.filter(event => event.id === eventId)[0]
  }
  return {
    event
  }
}
const actions = {
  createEvent,
  updateEvent,
  deleteEvent
}
class EventForm extends Component {
  
  state = {
    ...this.props.event 
  };
  componentDidMount(){
    if (this.props.selectedEvent !== null){
      this.setState({
        ...this.props.selectedEvent
      })
    }
  }
  onSubmitForm = (e) => {
    e.preventDefault();
    if(this.state.id){
      this.props.updateEvent(this.state);
      this.props.history.push(`/events/${this.state.id}`)
    } else {
      const newEvent = {
        ...this.state,
        id: cuid(),
        hostPhotoURL: 'assets/user.png'
      }
      this.props.history.push(`/events/${newEvent.id}`)
      this.props.createEvent(newEvent);
    }    
  } 
  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const {title, date, city, venue, hostedBy} = this.state;
    return (
      <Fragment>
        <Segment>
            <Form onSubmit={this.onSubmitForm} autoComplete="off">
                <Form.Field>
                <label>Event Title</label>
                <input 
                  name='title'
                  value={title}
                  onChange={this.onChangeInput}
                  placeholder="First Name" 
                  />
                </Form.Field>
                <Form.Field>
                <label>Event Date</label>
                <input 
                  type="date" 
                  onChange={this.onChangeInput}
                  placeholder="Event Date" 
                  name='date'
                  value={date}
                  />
                </Form.Field>
                <Form.Field>
                <label>City</label>
                <input 
                  placeholder="City event is taking place" 
                  onChange={this.onChangeInput}
                  name='city'
                  value={city}
                  />
                </Form.Field>
                <Form.Field>
                <label>Venue</label>
                <input 
                  placeholder="Enter the Venue of the event" 
                  onChange={this.onChangeInput}
                  name='venue'
                  value={venue}
                  />
                </Form.Field>
                <Form.Field>
                <label>Hosted By</label>
                <input 
                  placeholder="Enter the name of person hosting" 
                  onChange={this.onChangeInput}
                  name='hostedBy'
                  value={hostedBy}
                  />
                </Form.Field>
                <Button 
                  positive 
                  type="submit"
                  >
                    Submit
                </Button>
                <Button type="button" onClick={this.props.history.goBack}>Cancel</Button>
            </Form> 
        </Segment>
      </Fragment>
    )
  }
}

export default connect(mapState, actions)(EventForm);