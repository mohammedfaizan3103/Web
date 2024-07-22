import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between p-3 px-16 text-xl bg-black text-white items-center'>
            <div>
                <span className='cursor-pointer font-bold text-3xl font-serif'>iTask</span>
            </div>
            <ul className="flex gap-5">
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Contact Us</li>
            </ul>
        </nav>
    )
}

export default Navbar
