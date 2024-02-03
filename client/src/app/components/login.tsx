import Link from 'next/link'
import React from 'react'

export default function Login() {
  return (
    <div>
      <h1 className="flex text-2xl font-semibold mb-4 text-center justify-center">Login</h1>
      <form action="#" method="POST">
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-600">Username</label>
        <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"/>
      </div>
   
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-600">Password</label>
        <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"/>
      </div>
    
      <div className="mb-6 text-blue-500">
        <a href="#" className="hover:underline">Forgot Password?</a>
      </div>
    
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
      </form>
    <div className='flex space-x-2 mt-2 justify-start'>
        <p className=' text-gray-600'>Não possui uma conta?</p>
        <Link href="/register/customer" className=' hover:text-blue-500 text-gray-700'>
        <span className=' text-blue-500'>Cadastrar</span>
        </Link>
    </div>
    
      

    </div>
  )
}
