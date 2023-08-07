import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaEdit, FaMap, FaTrash } from 'react-icons/fa'
import FormikFieldText from '../../Components/FormikFieldText';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
// import FormikFieldRadio from '../../Components/FormikFieldRadio';
import axiosErrorHandler from '../../utils/axiosErrorHandler';
import FormikFieldCheckbox from './../../Components/FormikFieldCheckbox';
import './EditAddress.css';
import Button from '../../Components/Button';

const LocationType = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'Work' },
    { id: 3, name: 'Others' }
]

const setLocationType = (value) => {
    console.log(value);
}

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

function EditAddress() {
    let navigate = useNavigate();

    const validationSchema = useMemo(
        () =>
            Yup.object().shape({
                username: Yup.string()
                    .label('Username')
                    .required(('Username is required')),
                mobile: Yup.string()
                    .label('Mobile Number')
                    .required('Mobile Number is required')
                    .email()
            }),
        [],
    );

    return (
        <div className=''>
            <div className='flex w-full p-4 border-b'>
                <div className='flex w-full'>
                    <FaArrowLeft
                        className='icon-size'
                        onClick={() => navigate('/address')} />
                    <span className='ml-4'>Edit Address</span>
                </div>
                <div className='my-auto text-red-500'>
                    <FaTrash />
                </div>
            </div>
            <div className='flex-wrap m-4'>
                <p className='font-bold text-sm mb-2'>
                    Select a Category
                </p>
                <div>
                    <div className="radio-toolbar">
                        {
                            LocationType.map((location) => (
                                <span key={location.id} className='font-bold'>
                                    <input type="radio"
                                        className='bg-red-200'
                                        id={location.id} name="radios"
                                        value={location.id}
                                        onChange={e => setLocationType(e.target.value)} />
                                    <label className='bg-red-200' htmlFor={location.id}>{location.name}</label>
                                </span>
                            ))
                        }
                    </div>
                </div>
                <div className='my-5 pt-3'>
                    <div className='flex justify-between'>
                        <p className='font-bold'>Address</p>
                        <FaMap className='text-red-500 my-auto' />
                    </div>
                    <div className='flex my-1'>
                        <FaEdit className='text-red-500 my-auto' />
                        <p className='pl-2 w-full'>Lot B210  C208, Tingkat 2,, Wisma Consplant 2, No. 7 Jln SS16/1,, 47509 Subang Jaya, Selangor</p>
                    </div>
                </div>
                <div className='my-5 pt-3'>
                    <p className='font-bold'>Contact Info</p>
                    <div className="">
                        <ToastContainer />
                        <Formik
                            initialValues={{
                                username: '',
                                mobile: '',
                                default: '',
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values, { setSubmitting }) =>
                                handleSubmit(values, { setSubmitting })
                            }>
                            {({ submitForm, isSubmitting }) => (
                                <div>
                                    <div className='px-2 mt-3'>
                                        <FormikFieldText
                                            icon="key-outline"
                                            label="Name"
                                            placeholder="Enter name"
                                            name="username"
                                            textContentType="text"
                                        />
                                        <FormikFieldText
                                            icon="key-outline"
                                            label="Phone Number"
                                            placeholder="Enter phone number"
                                            name="mobile"
                                            textContentType="text"
                                        />

                                        <label className='w-full block mb-1 font-bold text-gray-500'></label>
                                        <div className='flex'>
                                            <FormikFieldCheckbox
                                                label="Set as default address"
                                                value='false'
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="text-center mt-5">
                                            <Button
                                                label={'Save'}
                                                action={'submit'}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default EditAddress;