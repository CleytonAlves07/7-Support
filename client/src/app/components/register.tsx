"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function Register() {
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
      const res = await fetch(`${BACKEND_URL}/register/customer`, {
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
        router.push('/about')
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
    <div className=' w-1/2 min-w-80'>
      <h1 className="flex text-2xl font-semibold mb-4 text-center justify-center">Cadastro</h1>
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-600">Nome</label>
        <input 
            type="text" 
            id="name" 
            name="name"
            placeholder="João dos Santos"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"           
          />
        </div>
        <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600">Email</label>
        <input 
            type="email" 
            id="email" 
            name="email"
            placeholder="joao_dos_santos@exemplo.com"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"           
          />
        </div>
        <div className="mb-4">
        <label htmlFor="password" className="block text-gray-600">Senha</label>
        <input 
            type="password" 
            id="password" 
            name="password"
            placeholder="SenhaComLetra$eNumeros"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"/>
      </div>
   
      <div className="mb-4">
        <label htmlFor="cpf" className="block text-gray-600">CPF</label>
        <input 
            type="text" 
            id="cpf" 
            name="cpf"
            placeholder="192.173.164-58"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"/>
      </div>
        <button disabled={loading} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">
          {loading ? 'Loading...' : 'Salvar'}
        </button>
      </form>
  
    <div className='flex space-x-2 mt-2 justify-start'>
        <p className=' text-gray-600'>Já possui uma conta?</p>
        <Link href="/login/customer" className=' hover:text-blue-500 text-gray-700'>
        <span className=' text-blue-500'>Entrar</span>
        </Link>
      </div>
      <div className='mb-8 h-12'>
        {!success ? <p className='flex justify-center mt-4 text-red-600'>{message}</p> :
          <p className='flex justify-center mt-4 text-teal-600'>{message}</p>}
      </div>
    </div>
  )
}
