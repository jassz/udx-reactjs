import React, { useState } from 'react';
import { FaArrowLeft, FaMapMarkerAlt, FaArrowRight, FaRegClock, FaTachometerAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import '../index.css'
import image1 from '../assets/images/UD-Express_App_User_Icon.jpg'

const TabRender = ({ color }) => {
    let navigate = useNavigate();

    const [openTab, setOpenTab] = React.useState(1);
    return (
        <div>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap flex-row border-b-2 border-grey-200 "
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold px-5 py-3 rounded block leading-normal " +
                                    (openTab === 1
                                        ? "text-red-600 border-b-4 border-red-500" : "text-black")
                                    // ? "text-" + color + "-600 bg-white"
                                    // : "text-black bg-" + color + "-600")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                To Pay
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold px-5 py-3 rounded block leading-normal " +
                                    (openTab === 2
                                        ? "text-red-600 border-b-4 border-red-500" : "text-black")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                On-Going
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold px-5 py-3 rounded block leading-normal " +
                                    (openTab === 3
                                        ? "text-red-600 border-b-4 border-red-500" : "text-black ")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                Dine History
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id='link1'>
                                    <div className='flex mb-5' onClick={() => navigate('/order-details')}>
                                        <img alt="image1" className='rounded-full h-full w-1/4 p-2' src={image1} />
                                        <div className='my-auto'>
                                            <p className='font-bold ml-4'>UD2022129152569862</p>
                                            <p className='text-sm ml-4 text-gray-600 '>
                                                2 items, RM35.05
                                            </p>
                                            <p className='text-sm ml-4 font-bold text-gray-600 font-bold '>
                                                Pending Payment
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <div className='flex mb-5' onClick={() => navigate('/order-details')} >
                                        <img alt="image1" className='rounded-full h-full w-1/4 p-2' src={image1} />
                                        <div className='my-auto'>
                                            <p className='font-bold ml-4'>UD2022142343249862</p>
                                            <p className='text-sm ml-4 text-gray-600 '>
                                                12 items, RM342.05
                                            </p>
                                            <p className='text-sm ml-4 font-bold text-gray-600 font-bold '>
                                                In transit
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <div className='flex mb-5' onClick={() => navigate('/order-details')}>
                                        <img alt="image1" className='rounded-full h-full w-1/4 p-2' src={image1} />
                                        <div className='my-auto'>
                                            <p className='font-bold ml-4'>UD2022129876543862</p>
                                            <p className='text-sm ml-4 text-gray-600 '>
                                                22 items, RM15.05
                                            </p>
                                            <p className='text-sm ml-4 font-bold text-gray-600 font-bold '>
                                                Completed
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabRender;
