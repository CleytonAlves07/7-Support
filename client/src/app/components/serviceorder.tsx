"use client"
import { Search } from 'lucide-react';
import React, { useState } from 'react';

export default function ServiceOrderForm() {
  const [formData, setFormData] = useState({
    customerName: '',
    mechanicName: '',
    defect: '',
    product: '',
    amount: '',
  });
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [productSearchResults, setProductSearchResults] = useState([]);
  const [formProduct, setFormProduct] = useState({
    product: "",
    amount: "",
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  }

  function resetForm() {
    setFormData({
      customerName: '',
      mechanicName: '',
      defect: '',
      product: '',
      amount: '',
    });
  }

  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  async function handleSearchProduct(query: any) {

    try {
      const pascalCase = query.slice(0, 1).toUpperCase() + query.slice(1);
      const res = await fetch(`${BACKEND_URL}/admin/search/product?query=${pascalCase}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
      setProductSearchResults(data);
    } catch (error) {
      console.error(error);
    }
  }

  function selectProduct(product: any) {
    setFormProduct({
      ...formProduct,
      product: product.product,
      amount: product.amount,
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
          <label htmlFor="customerName" className="block mb-2 text-sm font-bold text-gray-500">Nome Cliente</label>
          <div className='relative'>
            <input
              type="text"
              name="customerName"
              id="customerName"
              value={formData.customerName}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-500 
              text-gray-900 text-sm rounded-lg focus:ring-1 focus:outline-none 
              focus:ring-blue-500 block w-full p-2.5 pr-10 "
              required
              placeholder="Nome do Cliente"
            />
            <button
              type="submit"
              onClick={() => handleSearchProduct}
              className="absolute right-0 top-0 bottom-0 px-3 py-2 text-white bg-blue-500 rounded-r-md focus:outline-none"
            >
              <Search />
            </button>
            
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="mechanicName" className="block mb-2 text-sm font-bold text-gray-500">ID do Mecânico</label>
          <div className='relative'>
            <input
              type="text"
              name="mechanicName"
              id="mechanicName"
              value={formData.mechanicName}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-500 
              text-gray-900 text-sm rounded-lg focus:ring-1 focus:outline-none 
              focus:ring-blue-500 block w-full p-2.5 pr-10 "
              required
              placeholder="Nome do Mecânico"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 bottom-0 px-3 py-2 text-white bg-blue-500 rounded-r-md focus:outline-none"
            >
              <Search />
            </button>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="defect" className="block mb-2 text-sm font-bold text-gray-500">Defeito Apresentado</label>
          <div className='relative'>
            <input
              type="text"
              name="defect"
              id="defect"
              value={formData.defect}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-500 
              text-gray-900 text-sm rounded-lg focus:ring-1 focus:outline-none 
              focus:ring-blue-500 block w-full p-2.5 pr-10 "
              required
              placeholder="Defeito Apresentado"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 bottom-0 px-3 py-2 text-white bg-blue-500 rounded-r-md focus:outline-none"
            >
              <Search />
            </button>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="product" className="block mb-2 text-sm font-bold text-gray-500">Produto</label>
          <div className='relative'>
            <input
              type="text"
              name="product"
              id="product"
              value={formData.product}
              onChange={(e) => {handleChange(e); handleSearchProduct(e.target.value)}}
              className="bg-gray-50 border border-gray-500 
              text-gray-900 text-sm rounded-lg focus:ring-1 focus:outline-none 
              focus:ring-blue-500 block w-full p-2.5 pr-10 "
              required
              placeholder="Produtos"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 bottom-0 px-3 py-2 text-white bg-blue-500 rounded-r-md focus:outline-none"
            >
              <Search />
            </button>
          </div>
          <div className=' bg-blue-200 rounded flex flex-col pt-2 pl-2'>
            {productSearchResults.map((product) => (
              <div key={product} onClick={ () => selectProduct(product)}>{product.product}</div>
            ))}
            </div>
        </div>
        <div className="sm:col-span-2 flex flex-col bg-slate-200 rounded justify-center items-center bottom-10 mb-4">
          <label htmlFor="amount" className="block mb-2 text-md font-bold text-red-500">Valor</label>
          <h2 className=' text-red-600 font-semibold'>{formData.amount.length <= 0 ? `R$ 0,00` : `R$ ${formData.amount}`}</h2>
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
