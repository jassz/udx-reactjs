import React from 'react';

const Button = ({
    action,
    label
}) => {
    // const [field, meta] = useField(value);
    return ( 
        <button 
        className="shadow bg-red-600 focus:shadow-outline w-1/2 focus:outline-none text-white font-bold py-2 px-4 rounded-full" 
        type="button"
        onClick={action}>
            {label}
        </button>
     );
}

export default Button;