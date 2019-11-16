import { Component } from "react";

class StateReducer extends Component {
  initialState = {
    on: true,
  }
  state = this.initialState;

  // 2 internal setState 
  internalSetState(changes, callback) {
    this.setState(state => {
      // handle function setState call
      const changesObject = typeof changes === 'function' ? changes(state) : changes

      // 3 apply state reducer
      const reducedChanges = this.props.stateReducer(state, changesObject) || {}
      return Object.keys(reducedChanges).length ? reducedChanges : null //return null if there no changes, avoid unnecessary render

    }, callback)
  }


  // 1 toggle is triggered
  toggle = () => {
    this.internalSetState(
      (currentState) => ({ on: !currentState.on }),
      () => {
        // 4 after state reducers is finished cb is triggered
        this.props.onToggle(this.state.on)
      },
    )
  }

  getStateAndHelpers() {
    return {
      on: this.state.on,
      toggle: this.toggle,
      togglerProps: {
        'aria-pressed': this.state.on,
        onClick: this.toggle,
      },
    }
  }

  render() {
    return this.props.children(this.getStateAndHelpers())
  }
}


export default StateReducer;
