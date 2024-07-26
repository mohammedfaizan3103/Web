import React from 'react'
import { memo } from 'react'

const Navbar = ({variable, func}) => {
    console.log("Rendering");
  return (
    <div>
      This is {variable}
      <button>{func()}</button>
    </div>
  )
}

export default memo(Navbar)
