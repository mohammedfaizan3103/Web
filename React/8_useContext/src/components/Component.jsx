import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/context'

const Component = () => {
  const counter = useContext(counterContext)
  return (
    <div>
      {counter.count}
    </div>
  )
}

export default Component
