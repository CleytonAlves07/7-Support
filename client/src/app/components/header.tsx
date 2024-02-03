import React from 'react'
import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-blue-500'>
      <div className=' flex justify-between mx-auto max-w-6xl p-4'>
        <Link href="/" className=' hover:text-gray-700 text-white'  > 7- logo</Link>
        <ul className='flex space-x-6'>
          <li>
            <Link href='/' className=' hover:text-gray-700 text-white'>Home</Link>
          </li>
          <li>
            <Link href='/about' className=' hover:text-gray-700 text-white'>Sobre</Link>
          </li>
          <li>
            <Link href='/login/customer' className=' hover:text-gray-700 text-white'>Cliente</Link>
          </li>
          <li>
            <Link href='/register/customer' className=' hover:text-gray-700 text-white'>Register</Link>
          </li>
      </ul>
      </div>
    </header>
  )
}
