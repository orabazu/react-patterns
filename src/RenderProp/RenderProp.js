import { Component } from "react";

class RenderProp extends Component {
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

  getStateAndHelpers() {
    return {
      on: this.state.on,
      toggle: this.toggle,
    }
  }

  render() {
     return this.props.children(this.getStateAndHelpers())
  }
}


export default RenderProp;
