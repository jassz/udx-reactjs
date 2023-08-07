import React from 'react';
import { FaArrowLeft, FaPhoneAlt, FaRegComment, FaCircle, FaRegCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import image1 from '../../assets/images/UD-Express_App_User_Icon.jpg'

function OrderDetails() {
    let navigate = useNavigate();
    return (
        <div className='pb-10'>
            <div className='flex footer p-4 border-b w-full'>
                <div className='flex w-full'>
                    <FaArrowLeft
                        className='icon-size my-auto'
                        onClick={() => navigate('/')} />
                    <span className='ml-4 text-base font-bold'>Order Details</span>
                </div>
            </div>

            <div className='flex mb-5'>
                <img alt="image1" className='rounded-full h-full w-1/6 p-2 my-auto' src={image1} />
                <div className=''>
                    <p className='text-gray-400 text-sm mx-2 py-2'>Order at</p>
                    <p className='text-sm mx-2 font-bold'>Uncle Don's Klang</p>
                    <p className='text-sm mx-2'>Uncle Don's, 8, 10, Lorong Batu Nilam 3A, bandar Bukit Tinggi 1, Klang, Selangor</p>
                    <div className='flex'>
                        <FaPhoneAlt
                            className='m-2'
                            onClick={() => navigate('/')} />
                        <span className='my-1 font-medium text-blue-500'> 019-8185549</span>
                    </div>
                    <div className='flex'>
                        <FaRegComment
                            className='m-2 '
                            onClick={() => navigate('/')} />
                        <span className='my-1 font-medium text-blue-500'> Send us feedback</span>
                    </div>
                </div>
            </div>
            <div className="w-1/2 ml-5">
                <div className="flex">
                    <div className="flex flex-col items-center mx-4 mt-1">
                        <div>
                            <FaCircle className='text-red-600' />
                        </div>
                        <div className="w-px h-full bg-gray-300 border"></div>
                    </div>
                    <div className="mb-5">
                        <p className=" text-gray-600 font-bold">Pending Payment</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center mx-4">
                        <div>
                            <FaRegCircle className='text-red-600' />
                        </div>
                        <div className="w-px h-full bg-gray-300 border"></div>
                    </div>
                    <div className="mb-5">
                        <p className=" text-gray-600">Order confirmed</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center mx-4">
                        <div>
                            <FaRegCircle className='text-red-600' />
                        </div>
                        <div className="w-px h-full bg-gray-300 border"></div>
                    </div>
                    <div className="mb-5">
                        <p className=" text-gray-600">Found ypu a rider</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center mx-4">
                        <div>
                            <FaRegCircle className='text-red-600' />
                        </div>
                        <div className="w-px h-full bg-gray-300 border"></div>
                    </div>
                    <div className="mb-5">
                        <p className=" text-gray-600">Rider on the way</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center mx-4">
                        {/* <div> */}
                        <FaRegCircle className='text-red-600' />
                        {/* </div> */}
                    </div>
                    <div className="mb-5">
                        <p className="text-gray-600">Order complete!</p>
                    </div>
                </div>
            </div>
           
            <div className="w-py h-full bg-gray-200 border"></div>
            <div className='flex justify-between px-5 pt-5'>
                <p className='text-gray-500 '>Order ID</p>
                <p>UD202211017482323</p>
            </div>
            <div className='flex justify-between px-5 py-2'>
                <p className='text-gray-500 '>Order at</p>
                <p>29/12/2022 13:00:05</p>
            </div>

            <div className="w-py h-full bg-gray-200 border"></div>
            <div className='flex justify-between px-5 py-2'>
                <p className='text-sm text-gray-500'>Schedule at</p>
                <p className='font-bold'>ASAP</p>
            </div>
            <div className='pl-5 mb-4'>
                <p className='text-gray-500 '>Deliver to</p>
                <p className='font-bold'>Naja</p>
                <p>0198195549</p>
                <p>50, Jalan Barat 2/KS Kawasan 1 Ara Damansara</p>
            </div>

            <div className="w-py h-full bg-gray-200 border"></div>

            <div className='flex pl-5 my-5'>
                <img alt="image1" className='rounded-full h-full w-1/6 my-auto' src={image1} />
                <div className='px-3 my-auto'>
                    <p className=' text-sm'>East Coast Keropok Fish</p>
                    <p className='font-bold'>RM12.80 X 1</p>
                </div>
            </div>

            <div className="w-py h-full bg-gray-200 border"></div>

            <div className='px-5 my-3'>
                <p className='mb-2 text-gray-500'>Special Instructions</p>
                <input type="text" className="border rounded-md p-1 w-full font-semibold text-gray-400" disabled value="N/A"></input>
            </div>

            <div className="w-py h-full bg-gray-200 border mb-4"></div>

            <div className='flex justify-between px-5 py-1'>
                <p className='text-gray-500 '>Subtotal</p>
                <p className='font-bold'>RM12.80</p>
            </div>
            <div className='flex justify-between px-5 py-1'>
                <p className='text-gray-500 '>Delivery Fee</p>
                <p className='font-bold'>RM0.00</p>
            </div>
            <div className='flex justify-between px-5 py-1'>
                <p className='text-gray-500 '>Packaging Fee</p>
                <p className='font-bold'>RM 0.00</p>
            </div>
            <div className='flex justify-between px-5 py-1'>
                <p className='text-gray-500 '>SST</p>
                <p className='font-bold'>RM 0.00</p>
            </div>
            <div className='flex justify-between px-5 py-1'>
                <p className='text-gray-500 '>Discount</p>
                <p className='font-bold'>RM 0.00</p>
            </div>
            <div className='flex justify-between font-bold px-5 py-1'>
                <p>Total</p>
                <p className='font-bold'>RM 12.80</p>
            </div>

            <div className='text-center mt-5'>
                <p>Please pay in <span className='font-bold'>00:59:46</span></p>
                <button
                    className="shadow text-sm my-3 bg-red-600 focus:shadow-outline w-1/2 focus:outline-none text-white font-semibold py-2 px-4 rounded-full"
                    type="button"
                    onClick={() => navigate('/')}>
                    Pay Now
                </button>
            </div>
        </div>
    );
}

export default OrderDetails;