import React from 'react';
import RenderProp from './PropCollection'

import { Switch } from '../Switch/Switch';

const RenderPropUsage = ({ onToggle }) => {
  console.log(onToggle)
  return (
    <RenderProp onToggle={onToggle} >{({on, togglerProps}) => (
        <div>
          {on ? 'The button is on' : 'The button is off'}
          <Switch on={on} {...togglerProps} />
          <hr />
          <button aria-label="custom-button" {...togglerProps}>
            {on ? 'on' : 'off'}
          </button>
        </div>
      )}</RenderProp>
  )
}

export default RenderPropUsage;