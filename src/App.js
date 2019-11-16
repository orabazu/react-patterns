import React from "react";
import { render } from "react-dom";
import './style.scss';
import { Router } from "@reach/router"
import { Link } from '@reach/router'

import BasicToggleUsage from './BasicToggle/BasicToggleUsage'
import CompoundToggleUsage from './CompoundComponent/CompoundToggleUsage'
import FlexibleCompoudToggle from './FlexibleCompoundComponent/FlexibleCompoundToggleUsage'
import RenderPropUsage from './RenderProp/RenderPropUsage'
import PropCollectionUsage from './PropCollection/PropCollectionUsage'

import Paths from './Paths'
import StateReducerUsage from "./InternalStateReducer/StateReducerUsage";

class App extends React.Component {
  onToggle = (e) => {
    console.log('Toggle: ', e)
  }
  render() {
    return (
      <React.Fragment>
        <nav path="/asd">
          <Link to={Paths.compoundPath}> CompoundComponent |</Link> 
          <Link to={Paths.flexibleCompoundPath}> FlexibleCompoundComponent |</Link> 
          <Link to={Paths.renderPropPath}> Render Props |</Link> 
          <Link to={Paths.propCollectionPath}> Prop Collection |</Link> 
          <Link to={Paths.initialStateReducerPath}> Initial State Reducer </Link> 
        </nav>
        <Router className="switcher__wrapper">
          <BasicToggleUsage exact path="/" onToggle={this.onToggle} />
          <CompoundToggleUsage path={Paths.compoundPath} onToggle={this.onToggle} />
          <FlexibleCompoudToggle path={Paths.flexibleCompoundPath} onToggle={this.onToggle} />
          <RenderPropUsage path={Paths.renderPropPath} onToggle={this.onToggle} />
          <PropCollectionUsage path={Paths.propCollectionPath} onToggle={this.onToggle} />
          <StateReducerUsage path={Paths.initialStateReducerPath} onToggle={this.onToggle} />


        </Router>
      </React.Fragment>

    );
  }
}

render(<App />, document.getElementById("root"));
