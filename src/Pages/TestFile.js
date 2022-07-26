import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axiosErrorHandler from '../utils/axiosErrorHandler';

function TestFile() {

    const clickTest = () => {
        axiosErrorHandler();
    }

    return (
        <div className='text-center mt-5'>
            <button
                className="shadow text-center bg-red-600 focus:shadow-outline w-1/2 focus:outline-none text-white font-bold py-2 px-4 rounded-full"
                type="button"
                onClick={clickTest}>
                Click Here
            </button>

            <ToastContainer autoClose={8000} />
        </div>
    );
}

export default TestFile;