import React from 'react';
import PropCollection from './PropCollection'

import { Switch } from '../Switch/Switch';

const PropCollectionUsage = ({ onToggle }) => {
  console.log(onToggle)
  return (
    <PropCollection onToggle={onToggle} >{({on, togglerProps}) => (
        <div>
          {on ? 'The button is on' : 'The button is off'}
          <Switch on={on} {...togglerProps} />
          <hr />
          <button aria-label="custom-button" {...togglerProps}>
            {on ? 'on' : 'off'}
          </button>
        </div>
      )}</PropCollection>
  )
}

export default PropCollectionUsage;