"use client"
import React, { useEffect, useState } from 'react'
import checkAccessToken from './checkAccessToken';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';


export default function MaintenanceForm() {
  const [formData, setFormData] = useState({
    repair: '',
    amount: '',
  });
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
 

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({
      ...formData, [e.target.id]: e.target.value
    })
  }
  function resetForm() {
    setFormData({
    repair: '',
    amount: '',
  });
  }
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  async function handleSubmit(e: React.SyntheticEvent) {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await fetch(`${BACKEND_URL}/admin/register/maintenance`, {
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

  useEffect(() => {
    async function checkValidationToken() {
      const isValid = await checkAccessToken();
      if (!isValid) {
        router.push('/login');
      }
      setLoading(false);
    }

    checkValidationToken();
  });

  if (loading === false) {
    return (
      <div className='flex w-screen h-screen text-center items-center justify-center '>
        <div>
          <Loader2
          className='flex w-28 h-28 animate-spin text-blue-400'/>
        </div>
      </div>
    )
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <h1 
      className='flex justify-center items-center font-bold 
    text-gray-400 text-2xl mt-6 mb-8'
      >Cadastrar Serviço
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="w-full">
              <label 
              htmlFor="price" 
              className="block mb-2 text-sm font-bold text-gray-500"
              >Valor do Serviço
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
              >Descrição do reparo
              </label>
              <textarea 
              name="repair" 
              id="repair"
              value={formData.repair || ''}
              onChange={handleChange} 
              rows={3} 
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 
              rounded-lg border border-gray-500 
              focus:ring-1 focus:outline-none focus:ring-blue-500"
              placeholder="Descreva o serviço que será realizado aqui!"/>
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
    </>
  )
}
