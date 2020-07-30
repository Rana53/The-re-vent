import React, { Component } from 'react'
import { connect } from 'react-redux';
import {incrementCounter, decrementCounter} from './testAction';
import { Button } from 'semantic-ui-react';

const mapState = (state) => ({ 
  data: state.test.data
}) 
const actions = {
  incrementCounter,
  decrementCounter
}
class testComponent extends Component {
  render() {
    const {data, incrementCounter, decrementCounter} = this.props;
    console.log(this.props);
    return (
      <div>  
        <h1>Test Component</h1>
        <h3>your answer is : {data}</h3>
        <Button onClick={decrementCounter} negative  content='-'/>
        <Button onClick={incrementCounter} positive content='+'/>
      </div>
    )
  }
}
  
export default connect(mapState, actions)(testComponent);