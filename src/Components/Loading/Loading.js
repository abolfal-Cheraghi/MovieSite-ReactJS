import React from 'react'

export default function Loading() {
  return ReactDOM.createPortal(
    <div>Loading</div>,
    document.getElementById("parent-loading")
  );
}
