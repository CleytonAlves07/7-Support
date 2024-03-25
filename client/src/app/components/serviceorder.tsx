"use client"
import React, { useState } from 'react';

export default function ServiceOrderForm() {
  const [formData, setFormData] = useState({
    customerId: '',
    mechanicId: '',
    defect: '',
    product: '',
    description: '',
    amount: '',
  });
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  }

  function resetForm() {
    setFormData({
      customerId: '',
      mechanicId: '',
      defect: '',
      product: '',
      description: '',
      amount: '',
    });
  }

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/register/serviceOrder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);

      setSuccess(data.success);
      setMessage(data.message);

      if (data.success) {
        resetForm();
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <h1 className='flex justify-center items-center font-bold text-gray-400 text-2xl mt-6 mb-8'>Cadastrar Ordem de Serviço</h1>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="sm:col-span-2">
          <label htmlFor="customerId" className="block mb-2 text-sm font-bold text-gray-500">ID do Cliente</label>
          <input
            type="text"
            id="customerId"
            value={formData.customerId}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-blue-500 block w-full p-2.5"
            placeholder="ID do Cliente"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="mechanicId" className="block mb-2 text-sm font-bold text-gray-500">ID do Mecânico</label>
          <input
            type="text"
            id="mechanicId"
            value={formData.mechanicId}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-blue-500 block w-full p-2.5"
            placeholder="ID do Mecânico"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="defect" className="block mb-2 text-sm font-bold text-gray-500">Defeito Apresentado</label>
          <input
            type="text"
            id="defect"
            value={formData.defect}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-blue-500 block w-full p-2.5"
            placeholder="Defeito Apresentado"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="product" className="block mb-2 text-sm font-bold text-gray-500">Produto</label>
          <input
            type="text"
            id="product"
            value={formData.product}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-blue-500 block w-full p-2.5"
            placeholder="Produto"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="description" className="block mb-2 text-sm font-bold text-gray-500">Descrição do Produto</label>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-blue-500 block w-full p-2.5"
            placeholder="Descrição do Produto"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="amount" className="block mb-2 text-sm font-bold text-gray-500">Valor</label>
          <input
            type="text"
            id="amount"
            value={formData.amount}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-blue-500 block w-full p-2.5"
            placeholder="Valor"
          />
        </div>
      </div>
      <button
        disabled={loading}
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        {loading ? 'Loading...' : 'Cadastrar'}
      </button>
      <div className='mb-8 h-12 mt-10 text-xl'>
        {!success ? (
          <p className='flex justify-center mt-4 text-red-600'>{ message }</p>
        ) : (
          <p className='flex justify-center mt-4 text-teal-600'>{message}</p>
        )}
      </div>
    </form>
  );
}
