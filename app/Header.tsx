import Link from 'next/link'
import React from 'react'

function Header() {
  return (
<header className='bg-blue-500 p-5 '>
    <Link href="/" className=' px-2 py-1 text-blue-500 font-bold bg-white
     rounded-lg'>Home</Link>
</header>
  )
}

export default Header
