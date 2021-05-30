import { Avatar } from '@material-ui/core';
import React from 'react';
import './Story.css';

const Story = ({ title, profile, image }) => {
  return (
    <div className='story' style={{ background: `url(${image})` }}>
      <Avatar className='avatar' src={profile} />
      <h4>{title}</h4>
    </div>
  );
};

export default Story;
