import React from 'react';
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaEdit, FaAngleRight } from 'react-icons/fa'
import '../../index.css'
import avatar from '../../assets/images/default-avatar.png';
import './Account.css'

function Profile() {
    let navigate = useNavigate();

    return (
        <div>
            <div className='flex w-full p-4 border-b'>
                <div className='flex w-full'>
                    <FaArrowLeft
                        className='icon-size'
                        onClick={() => navigate('/account')} />
                    <span className='ml-4'>Profile Pages</span>
                </div>

                <FaEdit
                    className='icon-size text-red-600'
                    onClick={() => navigate('/profile/edit')} />
            </div>
            <img alt="Avatar" src={avatar} className="m-auto w-16 mt-2 rounded-full" />
            <p className='my-4 justify-center text-blue-600 flex'>
                <span>Change Photo</span>
            <FaAngleRight className='my-auto' />     
                </p>

            <ul className=''>
                <li className='flex py-3 border-t border-b'>
                    <div className="text-left px-5">Name</div>
                    <div className="text-left">Naja Nadhirah</div>
                </li>
                <li className='flex py-3 border-t border-b'>
                    <div className="text-left px-5">Gender</div>
                    <div className="text-left">Female</div>
                </li>
                <li className='flex py-3 border-t border-b'>
                    <div className="text-left px-5">Mobile</div>
                    <div className="text-left">0198763323</div>
                </li>
                <li className='flex justify-between py-3 border-t border-b'>
                    <div className='flex'>
                        <div className="text-left px-5">Password</div>
                        <div className="text-left">******</div>
                    </div>

                    <FaAngleRight
                        className='icon-size pr-2'
                        onClick={() => navigate('/change-password')} />
                </li>
            </ul>
            <p className='text-red-600 font-bold mt-5 text-center'>Log Out</p>
        </div>
    );
}

export default Profile;