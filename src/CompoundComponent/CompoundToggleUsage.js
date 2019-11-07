import React from 'react'
import CompoundToggle from './CompoundToggle'

const CompoundToggleUsage = ({ onToggle }) => {
  return (
    <CompoundToggle onToggle={onToggle}>
      <CompoundToggle.On> <p>The button is on </p> </CompoundToggle.On>
      <CompoundToggle.Off> <p>The button is off </p> </CompoundToggle.Off>
      <CompoundToggle.Button />
    </CompoundToggle>);
}

export default CompoundToggleUsage;