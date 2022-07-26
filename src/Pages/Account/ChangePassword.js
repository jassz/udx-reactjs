import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import './ChangePassword.css'
import { Formik } from 'formik';
import FormikFieldPassword from '../../Components/FormikFieldPassword';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import axiosErrorHandler from '../../utils/axiosErrorHandler';
import Button from '../../Components/Button';

function ChangePassword() {
    let navigate = useNavigate();

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

    // const goBack = () => {
    //     goBack();
    // };

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
                    <span className='ml-4'>Change Password</span>
                </div>
            </div>
            <div className=" mb-6 px-4 pt-4">
                <ToastContainer />
                <Formik
                    initialValues={{
                        old_password: '',
                        password: '',
                        password_confirmation: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) =>
                        handleSubmit(values, { setSubmitting })
                    }>
                    {({ submitForm, isSubmitting }) => (
                        <div>
                            <div className=''>
                                <FormikFieldPassword
                                    icon="key-outline"
                                    label="Current password"
                                    placeholder="Enter current password"
                                    name="old_password"
                                    textContentType="password"
                                    secureTextEntry={true}
                                />
                                <FormikFieldPassword
                                    icon="key-outline"
                                    label="New password"
                                    placeholder="Enter new password"
                                    name="password"
                                    textContentType="password"
                                    secureTextEntry={true}
                                />
                                <FormikFieldPassword
                                    icon="key-outline"
                                    label="Confirm new password"
                                    placeholder="Confirm new password"
                                    name="password_confirmation"
                                    textContentType="password"
                                    secureTextEntry={true}
                                />
                            </div>
                            <div className="">
                                <div className="text-center">
                                   <Button 
                                        label={'Update'} 
                                        action={'submit'} 
                                   />
                                </div>
                            </div>
                        </div>
                    )}
                </Formik>
            </div>


        </div>
    );
}

export default ChangePassword;