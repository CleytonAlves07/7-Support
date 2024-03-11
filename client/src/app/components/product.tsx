
"use client"
import React, { useEffect, useState } from 'react'

export default function ProductForm() {
  const [formData, setFormData] = useState({
    product: '',
    description: '',
    value: '',
  });
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData, [e.target.id]: e.target.value
    })
  }
  function resetForm() {
    setFormData({
    product: '',
    description: '',
    value: '',
  });
  }
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  async function handleSubmit(e: React.SyntheticEvent) {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await fetch(`${BACKEND_URL}/admin/product`, {
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
      <div className="relative z-0 w-full mb-5 group">
          <input 
            type="text" 
            name="product" 
            id="product"
            value={formData.product || ''}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
        <label
          htmlFor="product"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Nome do Produto
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
          <input 
            type="text" 
            name="description" 
            id="description"
            value={formData.description || ''}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Descrição</label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
          <input 
            type="text" 
            name="value" 
            id="value"
            value={formData.value || ''}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="value" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Valor unitário R$</label>
      </div>
      <button disabled={loading} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{loading ? 'Loading...' : 'Cadastrar'}</button>
      <div className='mb-8 h-12'>
        {!success ? (
          <p className='flex justify-center mt-4 text-red-600'>{ message }</p>
        ) : (
          <p className='flex justify-center mt-4 text-teal-600'>{message}</p>
        )}
      </div>
    </form>

  )
}
