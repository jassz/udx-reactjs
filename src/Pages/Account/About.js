import {useNavigate  } from 'react-router-dom'
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa'
import udLogo from '../../assets/images/UD-Express_App_User_Icon.jpg';

function About() {
    let navigate = useNavigate ();

    return (
        <div>
            <div className='flex w-full p-4 border-b'>
                <div className='flex w-full'>
                    <FaArrowLeft
                        className='icon-size my-auto'
                        onClick={() => navigate('/account')} />
                    <span className='ml-4 text-base font-bold'>About</span>
                </div>
            </div>
            <img alt="UD Logo" src={udLogo} className="m-auto mt-3 rounded-xl max-w-sm w-28" />
            <p className='text-center text-gray-400 text-base my-4'>v1.3.1 (9004)</p>
            <p className='text-base text-center px-5 text-gray-600 '>Uncle Don's official mobile app with delivery services, satisfying your cravings hassle free. Dine like a Don!</p>
        </div>
    );
}

export default About;