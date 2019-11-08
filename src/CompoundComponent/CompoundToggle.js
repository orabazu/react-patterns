import React, { Component } from "react";
import { Switch } from '../Switch/Switch';

class CompoundToggle extends Component {
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

  static On = (props) => (props.on ? props.children : null)
  // or another syntax
  static Off = ({ on, children }) => (on ? null : children)
  static Button = ({ on, toggle, ...props }) => (
    <Switch on={on} onClick={toggle} {...props} />
  )

  render() {
    return React.Children.map(this.props.children, child => React.cloneElement(child, {
      on: this.state.on,
      toggle: this.toggle,
    }))
  }
}


export default CompoundToggle;
