import React from 'react'

export default function Title(props) {
  return (
    <h2 className="fs-4 d-flex gap-2">
      <span>{props.firstT}</span>
      <span className='c-pink'>{props.secT}</span>
    </h2>
  );
}
