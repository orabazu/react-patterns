import React from "react";
import { render } from "react-dom";
import './style.scss';
import { Router } from "@reach/router"

import BasicToggleUsage from './BasicToggle/BasicToggleUsage'
import CompoundToggleUsage from './CompoundComponent/CompoundToggleUsage'
import FlexibleCompoudToggle from './FlexibleCompoundComponent/FlexibleCompoundToggleUsage'
import RenderPropUsage from './RenderProp/RenderPropUsage'

class App extends React.Component {
  onToggle = (e) => {
    console.log('Toggle: ', e)
  }
  render() {
    return (
      <Router className="switcher__wrapper">
        <BasicToggleUsage path="/" onToggle={this.onToggle} />
        <CompoundToggleUsage path="/compund-component" onToggle={this.onToggle} />
        <FlexibleCompoudToggle path="/flexible-compound-component" onToggle={this.onToggle} />
        <RenderPropUsage path="/render-prop" onToggle={this.onToggle} />
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
