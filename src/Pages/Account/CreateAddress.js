import React from 'react';
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

function EditAddress() {
    let navigate = useNavigate();

    return (
        <div>
            <div className='flex w-full p-4 border-b'>
                <div className='flex w-full'>
                    <FaArrowLeft
                        className='icon-size'
                        onClick={() => navigate('/address')} />
                    <span className='ml-4'>Create Address</span>
                </div>
            </div>
        </div>
    );
}

export default EditAddress;