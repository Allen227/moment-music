import React from 'react';

interface Props {
  href: string
}

export default function SvgIcon ({href}: Props) {
  return (
    <svg className="icon svg-icon" aria-hidden="true">
      <use href={`#${href}`}/>
    </svg>
  )
}
