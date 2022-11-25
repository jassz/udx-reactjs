import React, { useState } from 'react';
import { FaArrowLeft, FaMapMarkerAlt, FaArrowRight, FaRegClock, FaTachometerAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import '../index.css'
import image1 from '../assets/images/UD-Express_App_User_Icon.jpg'

const TabRender = ({ color }) => {
    let navigate = useNavigate();

    const [openTab, setOpenTab] = React.useState(1);

    const [orderList] = useState([
        {
            id: 'link1',
            number: 1,
            name: 'To Pay',
            data: [
                {
                    name: 'Product 1',
                    details: ' Completely synergize resource taxing relationships via' +
                        'premier niche markets. Professionally cultivate one-to-one' +
                        'customer service with robust ideas',
                    qty: '12',
                    image: {image1}
                },
                {
                    name: 'Product 2',
                    details: ' Completely synergize resource taxing relationships via' +
                        'premier niche markets. Professionally cultivate one-to-one' +
                        'customer service with robust ideas',
                    qty: '12',
                    image: '../assets/images/UD-Express_App_User_Icon.jpg'
                }
            ]
        },

        {
            id: 'link2',
            number: 2,
            name: 'On Going',
            data: [
                {
                    name: 'Product 3',
                    details: ' Completely synergize resource taxing relationships via' +
                        'premier niche markets. Professionally cultivate one-to-one' +
                        'customer service with robust ideas',
                    qty: '12',
                    image: '../assets/images/UD-Express_App_User_Icon.jpg'
                },
                {
                    name: 'Product 4',
                    details: ' Completely synergize resource taxing relationships via' +
                        'premier niche markets. Professionally cultivate one-to-one' +
                        'customer service with robust ideas',
                    qty: '12',
                    image: '../assets/images/UD-Express_App_User_Icon.jpg'
                }
            ]
        },
        {
            id: 'link3',
            number: 3,
            name: 'Dine History',
            data: [
                {
                    name: 'Product 5',
                    details: ' Completely synergize resource taxing relationships via' +
                        'premier niche markets. Professionally cultivate one-to-one' +
                        'customer service with robust ideas',
                    qty: '12',
                    image: '../assets/images/UD-Express_App_User_Icon.jpg'
                },
                {
                    name: 'Product 6',
                    details: ' Completely synergize resource taxing relationships via' +
                        'premier niche markets. Professionally cultivate one-to-one' +
                        'customer service with robust ideas',
                    qty: '12',
                    image: '../assets/images/UD-Express_App_User_Icon.jpg'
                }
            ]
        }
    ])
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
                                {orderList.map((order, i) =>
                                    <div className={openTab === 1 ? "block" : "hidden"} id='link1'>
                                        {i}
                                        {/* {order.data.map((value, i) => 
                                        <div className='flex mb-5' >
                                            {value.image}
                                        <img alt="image1" className='h-full w-1/4 p-2' src={value.image} />
                                        <div>
                                            <p className='font-bold ml-4'>{value.name}</p>
                                            <p className='text-sm ml-4 text-gray-600 '>
                                                {value.details}
                                            </p>
                                            <p className='text-sm ml-4 text-gray-600 font-bold '>
                                                {value.qty}
                                            </p>
                                        </div>
                                    </div>
                                        )} */}
                                        
                                    </div>
                                )}

                                {/* <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <div className='flex mb-5' >
                                        <img alt="image1" className='h-full w-1/4 p-2' src={image1} />
                                        <div>
                                            <p className='font-bold ml-4'>Product Name</p>
                                            <p className='text-sm ml-4 text-gray-600 '>
                                                Completely synergize resource taxing relationships via
                                                premier niche markets. Professionally cultivate one-to-one
                                                customer service with robust ideas.
                                                Completely synergize resource taxing relationships via
                                                premier niche markets. Professionally cultivate one-to-one
                                                customer service with robust ideas.
                                            </p>
                                            <p className='text-sm ml-4 text-gray-600 font-bold '>
                                                1pcs
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <div className='flex mb-5' >
                                        <img alt="image1" className='h-full w-1/4 p-2' src={image1} />
                                        <div>
                                            <p className='font-bold ml-4'>Product Name</p>
                                            <p className='text-sm ml-4 text-gray-600 '>
                                                Completely synergize resource taxing relationships via
                                                premier niche markets. Professionally cultivate one-to-one
                                                customer service with robust ideas.
                                                Completely synergize resource taxing relationships via
                                                premier niche markets. Professionally cultivate one-to-one
                                                customer service with robust ideas.
                                            </p>
                                            <p className='text-sm ml-4 text-gray-600 font-bold '>
                                                1pcs
                                            </p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabRender;
