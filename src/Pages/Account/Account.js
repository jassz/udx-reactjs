import React from 'react';
import udLogo from '../../assets/images/company_logo4.png';
import avatar from '../../assets/images/default-avatar.png';
import {
    FaUserAlt,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaInfoCircle,
    FaRegCommentAlt,
    FaAngleRight
}
    from 'react-icons/fa'
import './Account.css'
import {
    Link
} from 'react-router-dom';

function Account() {
    return (
        <div className=''>
            {/* <Link to="/test-file" className='flex justify-end px-5 w-full'>
                <p>Test File</p>
            </Link> */}

            <div className='bg-red-600 text-center pb-4'>
                <img alt="UD Logo" src={udLogo} className="m-auto max-w-sm w-48" />
                <img alt="Avatar" src={avatar} className="m-auto w-16 rounded-full" />
                <p className='font-bold text-white pt-2'>Naja Nadhirah</p>

            </div>
            <div className='py-3'>
                <p className=' text-center'>Your Dining Score</p>
                <p className='text-2xl font-bold text-center text-red-600'>800</p>
            </div>
            <ul className=''>
                <li className='flex justify-between py-3 border-t border-b'>
                    <Link to="/profile" className='flex justify-between w-full'>
                        <div className='flex'>
                            <FaUserAlt className='icon-1' />
                            <span className='pl-3'>Profile Information</span>
                        </div>
                        <FaAngleRight className='icon-2' />
                    </Link>

                </li>
                <li className='flex justify-between py-3 border-t border-b block'>
                    <Link to="/address" className='flex justify-between w-full'>
                        <div className='flex justify-between'>
                            <FaMapMarkerAlt className='icon-1' />
                            <span className='pl-3'>Saved Address</span>
                        </div>
                        <FaAngleRight className='icon-2' />
                    </Link>
                </li>
                <li className='flex justify-between py-3 border-t border-b block'>
                    <a href="tel:+900300400" className='flex'>
                        <div className='flex'>
                            <FaPhoneAlt className='icon-1' />
                            <span className='pl-3'>Customer Service</span>
                        </div>
                    </a>
                </li>
                <li className='flex justify-between py-3 border-t border-b block'>
                    <Link to="/feedback" className='flex justify-between w-full'>
                        <div className='flex justify-between'>
                            <FaRegCommentAlt className='icon-1' />
                            <span className='pl-3'>Send Us Feedback</span>
                        </div>
                        <FaAngleRight className='icon-2' />
                    </Link>
                </li>
                <li className='flex justify-between py-3 border-t border-b block'>
                    <Link to="/about" className='flex justify-between w-full'>
                        <div className='flex justify-between'>
                            <FaInfoCircle className='icon-1' />
                            <span className='pl-3'>About Us</span>
                        </div>
                        <FaAngleRight className='icon-2' />
                    </Link>
                </li>
            </ul>

        </div>
    );
}

export default Account;