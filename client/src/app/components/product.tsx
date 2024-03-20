
"use client"
import React, { useEffect, useState } from 'react'

export default function ProductForm() {
  const [formData, setFormData] = useState({
    product: '',
    description: '',
    amount: '',
  });
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({
      ...formData, [e.target.id]: e.target.value
    })
  }
  function resetForm() {
    setFormData({
    product: '',
    description: '',
    amount: '',
  });
  }
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  async function handleSubmit(e: React.SyntheticEvent) {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await fetch(`${BACKEND_URL}/admin/register/product`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      
      setSuccess(data.success);
      setMessage(data.message);
      setLoading(false);
      if (data.success) {         
        resetForm();
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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <h1 className='flex justify-center items-center font-bold text-gray-400 text-2xl mt-6 mb-8'>Cadastrar Produto</h1>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="sm:col-span-2">
              <label 
              htmlFor="name" 
              className="block mb-2 text-sm font-bold text-gray-500"
              >Nome do Produto
              </label>
              <input 
              type="text" 
              name="product" 
              id="product"
              value={formData.product || ''}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-500 
              text-gray-900 text-sm rounded-lg focus:ring-1 focus:outline-none 
              focus:ring-blue-500 block w-full p-2.5"
              placeholder="Produto" />
          </div>
          <div className="w-full">
              <label 
              htmlFor="price" 
              className="block mb-2 text-sm font-bold text-gray-500"
              >Preço
              </label>
              <input 
              type="text" 
              name="amount" 
              id="amount"
              value={formData.amount || ''}
              onChange={handleChange} 
              className="bg-gray-50 border border-gray-500 text-gray-900 
              text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-blue-500 
              block w-full p-2.5"
              placeholder="R$15,50" />
          </div>
          <div className="sm:col-span-2">
              <label 
              htmlFor="description" 
              className="block mb-2 text-sm font-bold text-gray-500 "
              >Descrição do produto
              </label>
              <textarea 
              name="description" 
              id="description"
              value={formData.description || ''}
              onChange={handleChange} 
              rows={8} 
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 
              rounded-lg border border-gray-500 
              focus:ring-1 focus:outline-none focus:ring-blue-500"
              placeholder="Descreva o produto aqui!"/>
          </div>
          <button 
          disabled={loading} 
          type="submit" 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
          focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
          text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >{loading ? 'Loading...' : 'Cadastrar'}
        </button>
      </div>
        <div className='mb-8 h-12 mt-10 text-xl'>
          {!success ? (
            <p className='flex justify-center mt-4 text-red-600'>{ message }</p>
          ) : (
            <p className='flex justify-center mt-4 text-teal-600'>{message}</p>
          )}
        </div>
    </form>
  )
}
