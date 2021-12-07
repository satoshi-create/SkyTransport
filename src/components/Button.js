import React from 'react'

const Button = ({name,cls}) => {
  return (
    <button className={`btn btn-comp ${cls}`}>
      {name}
      </button>
  )
}

export default Button
