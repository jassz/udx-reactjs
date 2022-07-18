import React from 'react';
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaPlus, FaArrowRight, FaMapPin, FaRegStar, FaEdit } from 'react-icons/fa'

function SavedAddress() {
    let navigate = useNavigate();

    return (
        <div>
            <div className='flex w-full p-4 border-b'>
                <div className='flex w-full'>
                    <FaArrowLeft
                        className='icon-size'
                        onClick={() => navigate('/account')} />
                    <span className='ml-4'>Saved Address Pages</span>
                </div>
            </div>
            <div className='px-4'>
                <p className='pt-4 text-gray-400'>Deliver to a new location?</p>
                <p className='border p-3 my-2 flex justify-between'>
                    <div className='flex'>
                        <FaPlus className='my-auto text-red-600' />
                        <span className='px-3'>Add New Address</span>
                    </div>
                    <FaArrowRight className='my-auto text-gray-400'
                    onClick={() => navigate('/address/create')} />
                </p>
            </div>
            <div className='px-4 flex'>
                <FaMapPin className='my-auto ml-3 text-red-600' />
                <p className='mx-4 text-gray-400'>Saved Addresses</p>
            </div>
            <div className="px-4 my-3">
                <div className='flex'>
                    <p className="text-xs font-bold bg-gray-200 py-1 px-4 rounded-full my-auto">
                        Home
                    </p>
                    <p className="ml-3 text-xs">
                        <p>Naja</p>
                        <p className='text-gray-500'>0198195549</p>
                    </p>
                </div>
                <div className='flex w-full py-2 border-b'>
                    <div className='flex w-full ml-3'>
                        <FaRegStar
                            className='my-auto text-red-600 w-6'
                        />
                        <p className='ml-4'>
                            Lingkaran Syed Putra, Mid Valley City, 59200 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur
                        </p>
                    </div>
                    <FaEdit     
                        className="my-auto text-red-600"
                        onClick={() => navigate('/address/edit')}
                    />
                </div>
            </div>
            <div className="px-4 my-3">
                <div className='flex'>
                    <p className="text-xs font-bold bg-gray-200 py-1 px-4 rounded-full my-auto">
                        Work
                    </p>
                    <p className="ml-3 text-xs">
                        <p>Roger</p>
                        <p className='text-gray-500'>0198195549</p>
                    </p>
                </div>
                <div className='flex w-full py-2 border-b'>
                    <div className='flex w-full ml-3'>
                        <span className='ml-4 xs:w-60'>
                            Convention and Entertaiment Centre, Jalan Stesen Sentral 2, Kuala Lumpur Sentral, 50470 Kuala Lumpur, Wilayah Persekutuan.
                        </span>
                    </div>
                    <FaEdit className="my-auto text-red-600"
                        onClick={() => navigate('/address/edit')} />
                </div>
            </div>
        </div>
    );
}

export default SavedAddress;