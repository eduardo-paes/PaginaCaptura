import React from 'react';
import './styles.css';

export default function SubscriptionContainer(props) {
  return (
    <div className='landing'>
      <div className='register-container'>
        {props.children}
      </div>
    </div>
  );
}