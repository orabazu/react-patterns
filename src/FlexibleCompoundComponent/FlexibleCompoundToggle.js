import React, { Component } from "react";
import { Switch } from '../Switch/Switch';

const ToggleContext = React.createContext()

class FlexibleCompoundToggle extends Component {
  

  toggle = () => {
    this.setState(
      (currentState) => ({ on: !currentState.on }),
      () => {
        this.props.onToggle(this.state.on)
      },
    )
  }

  state = {
    on: true,
    toggle: this.toggle
  }

  static On = props => (<ToggleContext.Consumer>{contextVal => contextVal.on ? props.children : null}</ToggleContext.Consumer>)
  // or another syntax
  static Off = ({ children }) => (<ToggleContext.Consumer>{({ on }) => on ? null : children}</ToggleContext.Consumer>)
  static Button = (props) => (
    <ToggleContext.Consumer>
      {
        (contextVal) => (
          <Switch on={contextVal.on} onClick={contextVal.toggle} {...props} />
        )
      }
    </ToggleContext.Consumer>
  )

  render() {
    return (
      <ToggleContext.Provider value={this.state}>
        {this.props.children}
      </ToggleContext.Provider>
    )
  }
}


export default FlexibleCompoundToggle;
