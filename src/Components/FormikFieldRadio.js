import { useField, useFormik } from 'formik';
import React, { useState } from 'react';

const FormikFieldPassword = ({
    name,
    label,
    textContentType,
    value
}) => {
    const [field, meta] = useField(value, name);

    return (
        <div>
            <div className="md:w-2/3 input-container mr-3">
                <input type="radio"
                    checked={true}
                    value={value}
                    name={name}
                    className="my-auto"
                />
                    {/* <input type="radio" name={name} value={value} className="my-auto" /> */}
                    <label> {label} </label>
            </div>
            <div className='mb-3 text-red-500'>
                {meta.touched && meta.error}
            </div>
        </div>

    );
}
export default FormikFieldPassword;