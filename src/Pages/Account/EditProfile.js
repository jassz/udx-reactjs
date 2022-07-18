import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import FormikFieldText from '../../Components/FormikFieldText';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import FormikFieldRadio from '../../Components/FormikFieldRadio';

import axiosErrorHandler from '../../utils/axiosErrorHandler';

function EditProfile() {
    let navigate = useNavigate();
    const [gender, setGender] = useState('');
    const [name, setName] = useState('');
    const changeName = event => {
        setName(event.target.value);
    };

    const changeGender = event => {
        setGender(event.target.value);
    };

    const submit = event => {
        alert('Form has been submitted')
    }

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            setSubmitting(true);

            // let { biz_action, data, biz_msg, server_time } = await client.patch(
            //     '/api/passwords',
            //     values,
            // );

            if (true) {
                toast.success('New Password Updated!', {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });

                // navigate('/profile');
            } else {
                throw Error('biz_msg');
            }
        } catch (err) {
            axiosErrorHandler('err')
        } finally {
            setSubmitting(false);
        }
    };


    const validationSchema = useMemo(
        () =>
            Yup.object().shape({
                old_password: Yup.string()
                    .label('Current Password')
                    .required(('Please enter current password')),
                password: Yup.string()
                    .label('New Password')
                    .required('Please enter new password')
                    .min(6, ('Password min 6'))
                    .max(15, ('Password max 15'))
                    .matches(
                        /^[a-zA-Z0-9]+$/,
                        ('Password chars')
                    ),
                password_confirmation: Yup.string()
                    .label('Confirm New Password')
                    .required('Please re-type new password')
                    .oneOf([Yup.ref('password')], ('Password mismatch')),
            }),
        [],
    );

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
                {/* <form className="w-full max-w-sm p-5"> */}
                <div className="md:flex mb-6">
                    <ToastContainer />
                    <Formik
                        initialValues={{
                            username: '',
                            email: '',
                            gender: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) =>
                            handleSubmit(values, { setSubmitting })
                        }>
                        {({ submitForm, isSubmitting }) => (
                            <div>
                                <div className='px-5'>
                                    <FormikFieldText
                                        icon="key-outline"
                                        label="Name"
                                        placeholder="Enter name"
                                        name="username"
                                        textContentType="text"
                                    />
                                    <FormikFieldText
                                        icon="key-outline"
                                        label="Email"
                                        placeholder="Enter email"
                                        name="email"
                                        textContentType="text"
                                    />

                                    <label className='w-full block mb-1 font-bold text-gray-500'>Gender</label>
                                    <div className='flex'>
                                        <FormikFieldRadio
                                            label="Male"
                                            name="Gender"
                                            value="male"
                                        />
                                        <FormikFieldRadio
                                            label="Female"
                                            name="Gender"
                                            value="female"
                                        />
                                    </div>

                                </div>
                            </div>
                        )}
                    </Formik>

                    {/* <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Name
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-100 border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
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
                            <input className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-300" id="inline-password" type="text" placeholder="text@gmail.com" />
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
                            value="male" onChange={changeGender}
                            className="my-auto" />
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
                        </div> */}
                </div>
                {/* </form> */}
            </div>
        </div>
    );

}

export default EditProfile;