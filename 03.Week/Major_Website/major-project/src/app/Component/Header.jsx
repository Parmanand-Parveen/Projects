import React from 'react'

function Header() {
  return (
    <div className='px-12 py-4 flex items-center justify-between'>
      <div className='text-3xl bg-gradient-to-r from-red-600 to-indigo-400 inline-block text-transparent bg-clip-text'> 
        DEVIN
      </div>

      <div className='flex gap-4 list-none text-lg'>
        <li className='hover:bg-gradient-to-r from-red-600 to-indigo-400 hover:inline-block hover:text-transparent hover:bg-clip-text transition-all'>Home</li>
        <li className='hover:bg-gradient-to-r from-red-600 to-indigo-400 hover:inline-block hover:text-transparent hover:bg-clip-text transition-all'>About</li>
        <li className='hover:bg-gradient-to-r from-red-600 to-indigo-400 hover:inline-block hover:text-transparent hover:bg-clip-text transition-all'>Features</li>
        <li className='hover:bg-gradient-to-r from-red-600 to-indigo-400 hover:inline-block hover:text-transparent hover:bg-clip-text transition-all'>Product</li>
        <li className='hover:bg-gradient-to-r from-red-600 to-indigo-400 hover:inline-block hover:text-transparent hover:bg-clip-text transition-all'>Contact</li>
      </div>
      <div className='flex gap-4 '>
        <button className='bg-gradient-to-r from-red-600 to-indigo-400 px-4 py-1 rounded'>Get Started</button>
        <button>Try for free</button>
      </div>
    </div>
  )
}

export default Header