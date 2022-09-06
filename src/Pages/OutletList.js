import React, { useState } from 'react';
import { FaArrowLeft, FaMapMarkerAlt, FaArrowRight, FaRegClock, FaTachometerAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import '../index.css'
import image1 from '../assets/images/UD-Express_App_User_Icon.jpg'

function OutletList() {
    let navigate = useNavigate();

    const [outlets] = useState([
        {
            id: 1,
            photo: { image1 },
            name: "Uncle Dons Bangsar",
            operating_hours: "8.00 am - 11.00 pm",
            distance: "2.2km",
            est_time: '4 mins',
            address: ' Uncle Don\'s, 18 Jalan Telawin 5, Bangsar Kuala Lumpur'
        },
        {
            id: 2,
            photo: { image1 },
            name: "Uncle Dons Kuchai Lama",
            operating_hours: "8.00 am - 11.00 pm",
            distance: "2.2km",
            est_time: '4 mins',
            address: ' Uncle Don\'s, 18 Jalan Telawin 5, Bangsar Kuala Lumpur'
        },
        {
            id: 3,
            photo: { image1 },
            name: "Uncle Dons Petaling Jaya",
            operating_hours: "8.00 am - 11.00 pm",
            distance: "2.2km",
            est_time: '4 mins',
            address: ' Uncle Don\'s, 18 Jalan Telawin 5, Bangsar Kuala Lumpur'
        },
        {
            id: 4,
            photo: { image1 },
            name: "Uncle Dons Ara Damansara",
            operating_hours: "8.00 am - 11.00 pm",
            distance: "2.2km",
            est_time: '4 mins',
            address: ' Uncle Don\'s, 18 Jalan Telawin 5, Bangsar Kuala Lumpur'
        },
        {
            id: 5,
            photo: { image1 },
            name: "Uncle Dons Bangsar",
            operating_hours: "8.00 am - 11.00 pm",
            distance: "2.2km",
            est_time: '4 mins',
            address: ' Uncle Don\'s, 18 Jalan Telawin 5, Bangsar Kuala Lumpur'
        },
        {
            id: 6,
            photo: { image1 },
            name: "Uncle Dons Bangsar",
            operating_hours: "8.00 am - 11.00 pm",
            distance: "2.2km",
            est_time: '4 mins',
            address: ' Uncle Don\'s, 18 Jalan Telawin 5, Bangsar Kuala Lumpur'
        }
    ])

    return (
        <div className='bg-red pb-10'>
            <div className='flex footer p-4 border-b fixed bg-white'>
                <div className='flex w-full'>
                    <FaArrowLeft
                        className='icon-size my-auto'
                        onClick={() => navigate('/')} />
                    <span className='ml-4 text-base font-bold'>Uncle Don's Near You</span>
                </div>

            </div>

            <p className='text-gray-400 text-base pt-16'>Deliver to</p>
            <p className='border p-3 mx-3 mb-5 flex justify-between'>
                <div className='flex'>
                    <FaMapMarkerAlt className='my-auto text-red-600' />
                    <span className='px-3'>Current Address...</span>
                </div>
                <FaArrowRight className='my-auto text-gray-400'
                    onClick={() => navigate('/')} />
            </p>
            {outlets.map((outlet, index) =>
            (
                <div className='flex mb-5' key={index} onClick={() => navigate('/menu-list')} >
                    <img alt="image1" className='w-1/4 p-2' src={outlet.photo.image1} />
                    <div>
                        <p className='font-bold ml-4'>{outlet.name}</p>
                        <div className='flex'>
                            <FaRegClock className='ml-4 mr-1 my-auto' /> <span>{outlet.operating_hours}</span>
                        </div>
                        <div className='flex'>
                            <FaTachometerAlt className='ml-4 mr-1 my-auto' />
                            <span>{outlet.distance}</span>
                            <FaTachometerAlt className='ml-4 mr-1 my-auto' />
                            <span>{outlet.est_time}</span>
                        </div>
                        <p className='text-sm ml-4 text-gray-600 '>
                            {outlet.address}
                        </p>
                    </div>
                </div>
            )
            )}
        </div>
    );
}

export default OutletList;