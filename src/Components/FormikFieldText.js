import { useField } from 'formik';
import React from 'react';

const FormikFieldPassword = ({
    name,
    label,
    placeholder,
    textContentType
}) => {
    const [field, meta] = useField(name, textContentType);

    return (
        <div>
            <label className='w-full block mb-1 font-bold text-gray-500'>{label}</label>
            <div className="md:w-2/3 input-container">
                <input 
                    className="bg-gray-100 border-2 border-gray-100 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
                    id="inline-full-name"
                    type='text'
                    onChange={field.onChange(name)}
                    onBlur={field.onBlur(name)}
                    value={field.value}
                    name={textContentType}
                    placeholder={placeholder} />
            </div>
            <div className='mb-3 text-red-500'>
                {meta.touched && meta.error}
            </div>
        </div>

    );
}
export default FormikFieldPassword;