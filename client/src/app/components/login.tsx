"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function Login() {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData, [e.target.id]: e.target.value
    })
    
  }
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  async function handleSubmit(e: React.SyntheticEvent) {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await fetch(`${BACKEND_URL}/api/auth/sign-in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
      const data = await res.json();
      setSuccess(data.success)
      setMessage(data.message);
      setLoading(false);
      if (data.success) {
        router.push('/')
      }
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMessage(null);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [message]);
  return (
    <div>
      <h1 className="flex text-2xl font-semibold mb-4 text-center justify-center">Login</h1>
      <form onSubmit={handleSubmit}>
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
