import { useField } from 'formik';
import React from 'react';

const FormikFieldCheckbox = ({
    name,
    label,
    value
}) => {
    const [meta] = useField(value, name);

    return (
        <div>
            <div className="md:w-2/3 input-container mr-3">
                <input type="checkbox"
                    value={value}
                    name={name}
                    className="my-auto mr-2"
                />
                   
                    <label> {label} </label>
            </div>
            <div className='mb-3 text-red-500'>
                {meta.touched && meta.error}
            </div>
        </div>
    );
}
export default FormikFieldCheckbox;