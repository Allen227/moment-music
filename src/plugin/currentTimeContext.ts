/** currentTime Context */
import React from 'react';

export let currentTime = {
  value: 0,
  update: (time: any) => {}
}; 

export const currentTimeContext = React.createContext(currentTime)