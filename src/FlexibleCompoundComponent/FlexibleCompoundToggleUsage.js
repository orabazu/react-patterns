import React from 'react'
import FlexibleCompoundToggle from './FlexibleCompoundToggle'

const FlexibleCompoundToggleUsage = ({ onToggle }) => {
  return (
    <FlexibleCompoundToggle onToggle={onToggle}>
      <FlexibleCompoundToggle.On> <p>The button is on </p> </FlexibleCompoundToggle.On>
      <FlexibleCompoundToggle.Off> <p>The button is off </p> </FlexibleCompoundToggle.Off>
      <div>
        <FlexibleCompoundToggle.Button />
      </div>
    </FlexibleCompoundToggle>);
}

export default FlexibleCompoundToggleUsage;