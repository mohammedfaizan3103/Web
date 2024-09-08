import React from 'react'


const Navbar = () => {
  return (
    <nav className='text-white flex justify-around items-center py-4'>
        <div className="log xs:text-3xl text-xl font-semibold cursor-pointer">
            <span className='text-purple-800'>&lt;</span>
            Pass
            <span className='text-purple-800'>OP/&gt;</span>
        </div>
        <ul className='flex gap-10'>
            <li className='cursor-pointer xs:text-lg text-sm hover:font-semibold'>
              <a className='flex gap-1 items-center' target='_blank' href="https://github.com/">
                <img className='invert h-8' src="icons8-github.svg" alt="" />
                <span>Github</span>
              </a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
