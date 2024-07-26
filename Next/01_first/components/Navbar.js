import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between p-5 bg-gray-600'>
      I am Navbar
      <ul className='flex gap-4'>
        <Link href="/"><li className='list-none'>Home</li></Link>
        <Link href="/about"><li className='list-none'>About</li></Link>
        <Link href="/contact"><li className='list-none'>Contact</li></Link>
      </ul>
    </div>
  )
}

export default Navbar
