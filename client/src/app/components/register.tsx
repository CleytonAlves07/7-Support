import Link from 'next/link'
import React from 'react'

export default function Register() {
  return (
    <div>
      <h1 className="flex text-2xl font-semibold mb-4 text-center justify-center">Cadastro</h1>
      <form action="#" method="POST">
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-600">Nome</label>
        <input 
            type="text" 
            id="username" 
            name="username"
            placeholder="João dos Santos"    
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
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"/>
      </div>
   
      <div className="mb-4">
        <label htmlFor="cpf" className="block text-gray-600">CPF</label>
        <input 
            type="text" 
            id="cpf" 
            name="cpf"
            placeholder="192.173.164-58"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"/>
      </div>
    
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Salvar</button>
      </form>
  
    <div className='flex space-x-2 mt-2 justify-start'>
        <p className=' text-gray-600'>Já possui uma conta?</p>
        <Link href="/login/customer" className=' hover:text-blue-500 text-gray-700'>
        <span className=' text-blue-500'>Entrar</span>
        </Link>
        </div>
    </div>
  )
}
