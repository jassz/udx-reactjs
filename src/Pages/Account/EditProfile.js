import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import FormikFieldText from '../../Components/FormikFieldText';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import FormikFieldRadio from '../../Components/FormikFieldRadio';

import axiosErrorHandler from '../../utils/axiosErrorHandler';
import Button from '../../Components/Button';

function EditProfile() {
    let navigate = useNavigate();
    // const [gender, setGender] = useState('');
    // const [name, setName] = useState('');
    // const changeName = event => {
    //     setName(event.target.value);
    // };

    // const changeGender = event => {
    //     setGender(event.target.value);
    // };

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
                username: Yup.string()
                    .label('Username')
                    .required(('Username is required')),
                email: Yup.string()
                    .label('Email')
                    .required('Email is required')
                    .email()
            }),
        [],
    );

    return (
        <div>
            <div className=' w-full p-4 border-b'>
                <div className='flex w-full'>
                    <FaArrowLeft
                        className='icon-size'
                        onClick={() => navigate('/profile')} />
                    <span className='ml-4'>Edit Profile</span>
                </div>
            </div>
            <div>
                {/* <form className="w-full max-w-sm p-5"> */}
                <div className=" mb-6">
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
                                <div className='px-5 mt-5'>
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
                    <div className="md:items-center mt-5">
                        <div className=" text-center">
                           <Button label={'Update'} action={submit} />
                        </div> 
                        </div>
                </div>
            </div>
        </div>
    );

}

export default EditProfile;