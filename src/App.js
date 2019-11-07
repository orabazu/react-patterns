import React from "react";
import { render } from "react-dom";
import './style.scss';
import { Router } from "@reach/router"

import BasicToggle from './BasicToggle/BasicToggle'

class App extends React.Component {
  onToggle = (e) => {
    console.log('Toggle: ', e)
  }
  render() {
    return (
      <Router>
        <BasicToggle path="/" onToggle={this.onToggle} />
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
