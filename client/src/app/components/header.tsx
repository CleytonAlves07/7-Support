import React from 'react'
import Link from 'next/link';
import { Black_Ops_One } from "next/font/google";

const black = Black_Ops_One( { weight: "400", subsets: ['latin'] });

export default function Header() {
  return (
    <header className=' bg-light-blue'>
      <div className=' flex justify-between mx-auto max-w-6xl p-4'>
        <Link href="/" className=' text-white text-2xl hover:text-gray-200'>
          <h1 className={black.className} >7 Support</h1>
        </Link>
        <ul className='flex space-x-6 justify-center text-center'>
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
