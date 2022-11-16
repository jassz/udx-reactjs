import React, { useState } from 'react';
import './../../App.css'
// import App from './../../App';
import { FaArrowLeft, FaSearch, FaCartPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import './Menu.css'
// import image1 from '../../assets/images/UD-Express_App_User_Icon.jpg'

function MenuList() {
    let navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState('0');
    const [tabs] = useState([
        {
            id: 0,
            tabTitle: 'Uncle Don\'s Merchandise',
            contents: [
                {
                    title: 'Uncle Don\'s Cap',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
                    price: '15.00',
                    image: '/static/media/UD-Express_App_User_Icon.ef3fa3fbd859bcb8198e.jpg'
                },
                {
                    title: 'Uncle Don\'s Cap',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
                    price: '15.00',
                    image: '../../assets/images/UD-Express_App_User_Icon.jpg'
                },
                {
                    title: 'Uncle Don\'s Cap',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
                    price: '15.00',
                    image: '../../assets/images/UD-Express_App_User_Icon.jpg'
                }
            ]
        },
        {
            id: 1,
            tabTitle: 'Wines',
            contents: [
                {
                    title: 'Uncle Don\'s Cap',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
                    price: '15.00',
                    image: '../../assets/images/UD-Express_App_User_Icon.jpg'
                }
            ]
        },
        {
            id: 2,
            tabTitle: 'Local Favourite',
            contents: [
                {
                    title: 'Uncle Don\'s Cap',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
                    price: '15.00',
                    image: '../../assets/images/UD-Express_App_User_Icon.jpg'
                }
            ]
        },
        {
            id: 3,
            tabTitle: 'Starters',
            contents: [
                {
                    title: 'Uncle Don\'s Cap',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
                    price: '15.00',
                    image: '../../assets/images/UD-Express_App_User_Icon.jpg'
                }
            ]
        },
        {
            id: 4,
            tabTitle: 'Chicken',
            contents: [
                {
                    title: 'Uncle Don\'s Cap',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
                    price: '15.00',
                    image: '../../assets/images/UD-Express_App_User_Icon.jpg'
                }
            ]
        },
        {
            id: 5,
            tabTitle: 'Pork',
            contents: [
                {
                    title: 'Uncle Don\'s Cap',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
                    price: '15.00',
                    image: '../../assets/images/UD-Express_App_User_Icon.jpg'
                }
            ]
        },
        {
            id: 6,
            tabTitle: 'Fish',
            contents: [
                {
                    title: 'Uncle Don\'s Cap',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
                    price: '15.00',
                    image: '../../assets/images/UD-Express_App_User_Icon.jpg'
                }
            ]
        },
        {
            id: 7,
            tabTitle: 'Lamb',
            contents: [
                {
                    title: 'Uncle Don\'s Cap',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
                    price: '15.00',
                    image: '../../assets/images/UD-Express_App_User_Icon.jpg'
                }
            ]
        }
    ])


    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
        window.location.href='#'+e.target.id;
    }
    let navigation = useNavigate();
    return (

        <div>
            <div className='flex w-full p-4 border-b'>
                <div className='flex justify-between w-full'>
                    <div className='flex justify-between'>
                        <FaArrowLeft
                            className='icon-size'
                            onClick={() => navigation('/outlet-list')} />
                        <span className='ml-4'>Uncle Don's Bangsar</span>
                    </div>
                    <div className='flex justify-between'>
                        <FaCartPlus
                            className='icon-size text-red-600 mr-4'
                            onClick={() => navigation('/outlet-list')} />
                        <FaSearch
                            className='icon-size text-red-600'
                            onClick={() => navigation('/outlet-list')} />
                    </div>

                </div>
            </div>
            <div className='container'>
                <div className='tabs tabs-scroll' style={{'position':'sticky','top':'0'}} >
                    {tabs.map((tab, i) =>
                        <a href={'#'+i}>
                            <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                        </a>
                    )}
                </div>

                <div className='content mt-3 mb-20'>
                    {tabs.map((tab, i) =>
                        <div id={i} key={i} className="">
                            <div>
                                <p className='text-base mb-2 font-extrabold'>{tab.tabTitle}</p>
                                {tab.contents.map((value, index) =>
                                <div>
                                    <div className='flex justify-start pb-2 border-bottom' onClick={() => navigate('/product')}>
                                        <img alt="image1" className='w-1/4 h-full' src='/static/media/UD-Express_App_User_Icon.ef3fa3fbd859bcb8198e.jpg' />
                                        <div className='ml-2'>
                                            <p className='font-bold text-sm'>{value.title}</p>
                                            <p className='text-sm'>{value.description}</p>
                                            <div className='flex justify-between'>
                                                <div className='flex justify-start'>
                                                    <span>RM</span><p className='font-bold'>{value.price}</p>
                                                </div>
                                                <FaCartPlus
                                                    className='mt-1 text-gray-400'
                                                    onClick={() => navigation('/outlet-list')} />
                                            </div>
                                        </div>
                                    </div>
            <div className='border-t-2 my-2 border-gray-200'></div>

</div>
                                    
                                )}
                            </div>                            
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
}

export default MenuList;