import React from 'react';
import './style.pcss';

interface Props {
  href: string,
  customStyle: object
}

export default function SvgIcon ({href, customStyle}: Props) {
  return (
    <svg className="icon svg-icon" style={customStyle} aria-hidden="true">
      <use href={`#${href}`}/>
    </svg>
  )
}
