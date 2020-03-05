import React from 'react';
import './style.pcss';

interface Props {
  href: string,
  customStyle: object,
  event: Function
}

export default function SvgIcon ({href, customStyle, event}: Props) {
  return (
    <svg className="icon svg-icon" style={customStyle} aria-hidden="true" onClick={() => event()}>
      <use href={`#${href}`}/>
    </svg>
  )
}
