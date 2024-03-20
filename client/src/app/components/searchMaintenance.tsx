import { Edit, Save, Search, Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface Maintenance {
  id: string;
  repair: string;
  amount: string;
}
export default function SearchMaintenance() {
  const [formData, setFormData] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState<null | boolean>(null);
  const [searchedMaintenance, setSearchedMaintenance] = useState<Maintenance[]>([]);
  const [editMaintenanceId, setEditMaintenanceId] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData(e.target.value);
  }

  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  async function handleDeleteMaintenance(id: string) {
    try {
      const res = await fetch(`${BACKEND_URL}/admin/maintenance/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();

      if (data.success) {
        setSearchedMaintenance(searchedMaintenance.filter((maintenance: any) => maintenance.id !== id));
        setMessage(data.message);
        setIsSuccess(data.success);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleEditMaintenance(id: string) {
    setEditMaintenanceId(id);
  }

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    try {
      const res = await fetch(`${BACKEND_URL}/admin/search/maintenance?query=${formData}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message);
        setSearchedMaintenance(data);
        setIsSuccess(data.success);

      } else {
        setMessage(data.message);
        setSearchedMaintenance([]);
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
  const updatedMaintenance = searchedMaintenance.map((maintenance: Maintenance) => {
    if (maintenance.id === editMaintenanceId) {
      return { ...maintenance, [name]: value };
    }
    return maintenance;
  });
  setSearchedMaintenance(updatedMaintenance);
};

  const handleSaveEdit = async () => {
  try {
    const maintenanceToEdit = searchedMaintenance.find((maintenance: any) => maintenance.id === editMaintenanceId);
    if (maintenanceToEdit) {
      const res = await fetch(`${BACKEND_URL}/admin/maintenance/update/${editMaintenanceId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(maintenanceToEdit), // Envie apenas o objeto de manutenção editado
      });

      const data = await res.json();

      if (data.success) {
        setMessage(data.message);
        setEditMaintenanceId(null);
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
          Pesquisar Serviço
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
              placeholder="Digite o nome do serviço"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 bottom-0 px-3 py-2 text-white bg-blue-500 rounded-r-md focus:outline-none"
            >
              <Search />
            </button>
          </div>
          {searchedMaintenance && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
              {searchedMaintenance.map((maintenance: any) => (
                <div key={maintenance.maintenance}
                  className="p-4 mt-8 bg-gray-100 hover:bg-slate-200 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] relative">
                  {editMaintenanceId === maintenance.id ? (
                    <div className='grid grid-cols-1 mb-2'>
                      <input
                        type="text"
                        name="repair"
                        value={maintenance.repair}
                        onChange={handleEditInputChange}
                        className='bg-gray-50 border border-gray-500 
                      text-gray-900 text-sm rounded-lg focus:ring-1 focus:outline-none 
                      focus:ring-blue-500 block w-full p-1.5 pr-10 mb-2 '
                      />
                      <input
                        type="text"
                        name="amount"
                        value={maintenance.amount}
                        onChange={handleEditInputChange}
                        className='bg-gray-50 border border-gray-500 
                      text-gray-900 text-sm rounded-lg focus:ring-1 focus:outline-none 
                      focus:ring-blue-500 block w-full p-1.5 pr-10 mb-2'
                      />
                      <button
                        onClick={() => handleSaveEdit()}
                        className=" max-w-10 bg-gray-300 hover:bg-blue-400 
                        hover:text-white text-gray-800 font-bold py-1 px-2 
                        focus:transition-bg duration-600 rounded inline-flex items-center"
                      >
                        <Save />
                      </button>
                    </div>
                  ) : (
                    <div className='grid grid-cols-1 mb-2'>
                      <p className='flex text-lg font-semibold justify-center mb-2'>{maintenance.repair}</p>
                      <p className='flex text-lg text-red-400 font-semibold justify-end m-6'> R$  {maintenance.amount}</p>
                    </div>
                  )}
                  <div className='absolute bottom-2 right-2 flex justify-end space-x-2'>
                    <button
                      className="bg-gray-300 hover:bg-red-400 hover:text-white 
                      text-gray-800 font-bold py-1 px-2 focus:transition-bg duration-600 
                      rounded inline-flex items-center"
                      onClick={() => handleDeleteMaintenance(maintenance.id)}
                    >
                      <Trash2 />
                    </button>
                    <button
                      className="bg-gray-300 hover:bg-green-400 hover:text-white 
                      text-gray-800 font-bold py-1 px-2 focus:transition-bg duration-600 
                      rounded inline-flex items-center"
                      onClick={() => handleEditMaintenance(maintenance.id)}
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
