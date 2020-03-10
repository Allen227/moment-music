import React from 'react';
import {useLocation} from 'react-router-dom';

interface locationType {
  state: any
}

export default function Song () {
  let location: locationType = useLocation();
  const songId = location.state.id;
  return (
    <div>
      <h1>song</h1>
    </div>
  )
}