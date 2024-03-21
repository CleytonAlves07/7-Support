import { Edit, Save, Search, Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface Product {
  id: string;
  product: string;
  description: string;
  amount: string;
}
export default function SearchProduct() {
  const [formData, setFormData] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState<null | boolean>(null);
  const [searchedProduct, setSearchedProduct] = useState<Product[]>([]);
  const [editProductId, setEditProductId] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData(e.target.value);
  }

  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  async function handleDeleteProduct(id: string) {
    try {
      const res = await fetch(`${BACKEND_URL}/admin/product/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();

      if (data.success) {
        setSearchedProduct(searchedProduct.filter((product: any) => product.id !== id));
        setMessage(data.message);
        setIsSuccess(data.success);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleEditProduct(id: string) {
    setEditProductId(id);
  }

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    try {
      const pascalCase = formData.slice(0, 1).toUpperCase() + formData.slice(1);
      const res = await fetch(`${BACKEND_URL}/admin/search/product?query=${pascalCase}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message);
        setSearchedProduct(data.map((product: Product) => ({
          ...product,
          product: product.product.slice(0,1).toUpperCase() + product.product.slice(1),
        })));
        setIsSuccess(data.success);

      } else {
        setMessage(data.message);
        setSearchedProduct([]);
      }
    } catch (error) {
      console.error(error);
      setIsSuccess(false);

    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMessage('');
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [message]);

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  const updatedProduct = searchedProduct.map((product: Product) => {
    if (product.id === editProductId) {
      return { ...product, [name]: value };
    }
    return product;
  });
  setSearchedProduct(updatedProduct);
};

  const handleSaveEdit = async () => {
    try {
      const productToEdit = searchedProduct.find((product: any) => product.id === editProductId);
      if (productToEdit) {
        const res = await fetch(`${BACKEND_URL}/admin/product/update/${editProductId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(productToEdit),
        });

        const data = await res.json();

        if (data.success) {
          setMessage(data.message);
          setEditProductId(null);
          setIsSuccess(data.success);

        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <h1 className='flex justify-center items-center font-bold text-gray-400 text-2xl mt-6 mb-8'>
          Pesquisar Produto
        </h1>
        <div className="max-w-2xl mx-auto mt-4 relative ">
          <div className='relative'>
            <input
              type="text"
              name="search"
              id="search"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-500 
              text-gray-900 text-sm rounded-lg focus:ring-1 focus:outline-none 
              focus:ring-blue-500 block w-full p-2.5 pr-10 "
              required
              placeholder="Digite o nome do produto"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 bottom-0 px-3 py-2 text-white bg-blue-500 rounded-r-md focus:outline-none"
            >
              <Search />
            </button>
          </div>
          {searchedProduct && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
              {searchedProduct.map((product: any) => (
                <div key={product.product}
                  className="p-4 mt-8 bg-gray-100 hover:bg-slate-200 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] relative">
                  {editProductId === product.id ? (
                    <div className='grid grid-cols-1 mb-2'>
                      <input
                        type="text"
                        name="product"
                        value={product.product}
                        onChange={handleEditInputChange}
                        className='bg-gray-50 border border-gray-500 
                      text-gray-900 text-sm rounded-lg focus:ring-1 focus:outline-none 
                      focus:ring-blue-500 block w-full p-1.5 pr-10 mb-2 '
                      />
                      <input
                        type="text"
                        name="description"
                        value={product.description}
                        onChange={handleEditInputChange}
                        className='bg-gray-50 border border-gray-500 
                      text-gray-900 text-sm rounded-lg focus:ring-1 focus:outline-none 
                      focus:ring-blue-500 block w-full p-1.5 pr-10 mb-2 '
                      />
                      <input
                        type="text"
                        name="amount"
                        value={product.amount}
                        onChange={handleEditInputChange}
                        className='bg-gray-50 border border-gray-500 
                      text-gray-900 text-sm rounded-lg focus:ring-1 focus:outline-none 
                      focus:ring-blue-500 block w-full p-1.5 pr-10 mb-2'
                      />
                      <button
                        onClick={() => handleSaveEdit()}
                        className=" max-w-10 bg-gray-300 hover:bg-blue-400 hover:text-white text-gray-800 font-bold py-1 px-2 focus:transition-bg duration-600 rounded inline-flex items-center"
                      >
                        <Save />
                      </button>
                    </div>
                  ) : (
                    <div className='grid grid-cols-1 mb-2'>
                      <p className='flex text-lg font-semibold justify-center mb-2'>{product.product}</p>
                      <p className='text-lg font-semibold text-gray-500'>{product.description}</p>
                      <p className='flex text-lg text-red-400 font-semibold justify-end m-6'> R$  {product.amount}</p>
                    </div>
                  )}
                  <div className='absolute bottom-2 right-2 flex justify-end space-x-2'>
                    <button
                      className="bg-gray-300 hover:bg-red-400 hover:text-white text-gray-800 font-bold py-1 px-2 focus:transition-bg duration-600 rounded inline-flex items-center"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      <Trash2 />
                    </button>
                    <button
                      className="bg-gray-300 hover:bg-green-400 hover:text-white text-gray-800 font-bold py-1 px-2 focus:transition-bg duration-600 rounded inline-flex items-center"
                      onClick={() => handleEditProduct(product.id)}
                    >
                      <Edit />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className='mb-8 h-12 text-xl'>
            {!isSuccess ? (
            <p className='flex justify-center mt-4 text-red-600'>{ message }</p>
          ) : (
            <p className='flex justify-center mt-4 text-teal-600'>{message}</p>
          )}
          </div>
        </div>
      </form>
    </div>
  );
}
