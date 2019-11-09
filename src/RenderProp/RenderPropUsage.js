import React from 'react';
import RenderProp from './RenderProp'

import { Switch } from '../Switch/Switch';

const RenderPropUsage = ({ onToggle }) => {
  console.log(onToggle)
  return (
    <RenderProp onToggle={onToggle} >{({on, toggle}) => (
        <div>
          {on ? 'The button is on' : 'The button is off'}
          <Switch on={on} onClick={toggle} />
          <hr />
          <button aria-label="custom-button" onClick={toggle}>
            {on ? 'on' : 'off'}
          </button>
        </div>
      )}</RenderProp>
  )
}

export default RenderPropUsage;