import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify';

const DEFAULT_MESSAGE = 'Unable to fulfil your request at the moment. Please try again later.'

function axiosErrorHandler (err) {
    toast.success(err || DEFAULT_MESSAGE, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true
            });
}

export default axiosErrorHandler ;