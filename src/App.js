import React from "react";
import { render } from "react-dom";
import './style.scss';
import { Router } from "@reach/router"

import BasicToggleUsage from './BasicToggle/BasicToggleUsage'
import CompoundToggleUsage from './CompoundComponent/CompoundToggleUsage'

class App extends React.Component {
  onToggle = (e) => {
    console.log('Toggle: ', e)
  }
  render() {
    return (
      <Router className="switcher__wrapper">
        <BasicToggleUsage path="/" onToggle={this.onToggle} />
        <CompoundToggleUsage path="/comp" onToggle={this.onToggle}  />
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
