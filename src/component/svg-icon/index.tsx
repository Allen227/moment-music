import React from 'react';
import './style.pcss';

interface Props {
  href: string,
  customStyle?: object,
  event: Function
}

export default function SvgIcon ({href, customStyle, event}: Props) {
  /**
   * handle event
   * @param e event taget
   */
  function handleEvent (e: React.MouseEvent) {
    e.stopPropagation();
    event();
  }
  return (
    <svg className="icon svg-icon" style={customStyle} aria-hidden="true" onClick={(e: React.MouseEvent) => handleEvent(e)}>
      <use href={`#${href}`}/>
    </svg>
  )
}
