import React from 'react'

const Message = ({mensaje}) => {
  return (
  
        <div className={`alert alert-${mensaje.color}`}>{mensaje.msg}</div>
 
  )
}

export default Message
