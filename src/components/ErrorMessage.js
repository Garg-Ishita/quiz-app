import React from 'react'
import './ErrorMessage.css'
const ErrorMessage = ({title}) => {
  return (
    <div className="outerError">
      <div class="lds-hourglass"></div>
      <h4 className='error'>{title}</h4>
    </div>
  )
}

export default ErrorMessage
