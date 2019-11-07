import React, { Component } from "react";
import { Switch } from '../Switch/Switch';

class BasicToggle extends Component {
  state = {
    on: true,
  }

  toggle = () => {
    this.setState(
      (currentState) => ({ on: !currentState.on }),
      () => {
        this.props.onToggle(this.state.on)
      },
    )
  }
  render() {
    const { on } = this.state
    return <Switch on={on} onClick={this.toggle} />
  }
}


export default BasicToggle;
