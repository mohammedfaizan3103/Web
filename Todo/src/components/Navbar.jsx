import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between p-3 sm:px-16 sm:text-xl text-lg bg-black text-white items-center'>
            <div>
                <span className='cursor-pointer font-bold sm:text-3xl text-xl font-serif'>iTask</span>
            </div>
            <ul className="flex gap-5">
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Contact Us</li>
            </ul>
        </nav>
    )
}

export default Navbar
