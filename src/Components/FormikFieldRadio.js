import { useField } from 'formik';
import React from 'react';

const FormikFieldPassword = ({
    name,
    label,
    value
}) => {
    const [meta] = useField(value, name);

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