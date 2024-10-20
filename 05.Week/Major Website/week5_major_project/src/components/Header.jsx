import React from 'react'

function Header() {
  return (
    <div className='sticky top-0 z-10'>
        <nav className='flex justify-between items-center  bg-zinc-900 text-white px-2 lg:px-12 py-4'>
          <div className='text-3xl'>Logo</div>
            <ul className='hidden lg:flex gap-3 list-none'>
              <li className='hover:bg-gradient-to-r from-red-600 to-indigo-400 hover:inline-block hover:text-transparent hover:bg-clip-text transition-all'>Home</li>
              <li className='hover:bg-gradient-to-r from-red-600 to-indigo-400 hover:inline-block hover:text-transparent hover:bg-clip-text transition-all'>About</li>
              <li  className='hover:bg-gradient-to-r from-red-600 to-indigo-400 hover:inline-block hover:text-transparent hover:bg-clip-text transition-all'>Courses</li>
              <li  className='hover:bg-gradient-to-r from-red-600 to-indigo-400 hover:inline-block hover:text-transparent hover:bg-clip-text transition-all'>Contact</li>
            </ul>
         <div className='flex gap-3'>
          <button className='border rounded-md px-4 py-2 bg-black '>Login</button>
          <button className='bg-white text-black border rounded-md px-4 py-2'>Sign Up</button>
         </div>
        
        </nav>
    </div>
  )
}

export default Header