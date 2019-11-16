import React from 'react';
import StateReducer from './StateReducer'

import { Switch } from '../Switch/Switch';

const renderWhoa = () => <div data-testid="notice">Whoa, you clicked too much!<br /></div>
const renderClickCount = (state) => <div data-testid="click-count">Click count: {state.timesClicked}</div>

class StateReducerUsage extends React.Component {

  state = { timesClicked: 0 };

  // 4 toggled cb is invoked
  // once state is set on child
  onToggled = (...args) => {
    this.setState(({ timesClicked }) => ({
      timesClicked: timesClicked + 1,
    }))
    this.props.onToggle(...args) // logs the info
  }

  // 3 state reducers is applied before inner child state is changed
  // state reducers components internalState change fn
  // redirects here to manipulate wrapper component state
  toggleStateReducer = (stateOfChild, changes) => {
    if (this.state.timesClicked >= 4) {
      return { ...changes, on: false }
    }
    return changes;
  }


  render() {
    const { timesClicked } = this.state
    return (
      <StateReducer onToggle={this.onToggled} stateReducer={this.toggleStateReducer} >
        {({ on, togglerProps }) => (
          <div>
            {on ? 'The button is on' : 'The button is off'}
            <Switch on={on} {...togglerProps} /> 
            <hr />
            {timesClicked > 4
              ? renderWhoa() : timesClicked > 0
                ? renderClickCount(this.state)
                : null}
          </div>
        )}</StateReducer>
    )
  }

}

export default StateReducerUsage;