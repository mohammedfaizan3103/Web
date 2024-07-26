import React from 'react'
import Component from './Component'
import { useContext } from 'react'
import { counterContext } from '../context/context'

const Button = () => {
  const counter = useContext(counterContext)
  return (
    <div>
      <button onClick={() => counter.setCount(counter.count + 1)}>
        Click Me
        <Component/>
      </button>
    </div>
  )
}

export default Button
