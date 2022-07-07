import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

function EditProfile() {
    let navigate = useNavigate();
    const [gender, setGender] = useState('');
    const [name, setName] = useState('');
    const changeName = event => {
        setName(event.target.value);
        // console.log(event.target.value);
      };

      const changeGender = event => {
        setGender(event.target.value);
        // console.log(event.target.value);
      };

      const submit = event =>{
        alert('Form has been submitted')
      }

    return (
        <div>
            <div className='flex w-full p-4 border-b'>
                <div className='flex w-full'>
                    <FaArrowLeft
                        className='icon-size'
                        onClick={() => navigate('/profile')} />
                    <span className='ml-4'>Edit Profile</span>
                </div>
            </div>
            <div>
                <form className="w-full max-w-sm p-5">
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Name
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="inline-full-name"
                                type="text"
                                placeholder="username"
                                value={name}
                                onChange={changeName} />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Email
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="inline-password" type="text" placeholder="text@gmail.com" />
                        </div>
                    </div>
                    <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Gender
                            </label>
                        </div>
                    <div className="radio mx-5 mb-3 flex justify-start">
                        <label className='my-auto'>
                            <input type="radio"
                            checked={gender === 'male'}
                            value="male" onChange={changeGender} />
                            Male
                        </label>
                    </div>
                    <div className="radio mx-5 my-3">
                        <label>
                            <input type="radio"
                            checked={gender === 'female'}
                            value="female" onChange={changeGender} />
                            Female
                        </label>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-2/3 text-center">
                            <button 
                            className="shadow bg-red-600 focus:shadow-outline w-1/2 focus:outline-none text-white font-bold py-2 px-4 rounded-full" 
                            type="button"
                            onClick={submit}>
                                Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default EditProfile;