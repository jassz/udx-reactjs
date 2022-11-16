import React, { useState } from 'react';
import image1 from '../../assets/images/UD-Express_App_User_Icon.jpg'
import "./Product.css"
import './../../App.css'
import { useNavigate } from 'react-router-dom'

import { FaArrowLeft } from 'react-icons/fa'

function ProductDetail() {
    
    let navigate = useNavigate();
    // let counter = 0
    let [counter, setCounter] = useState('0');

    const plusminus = (e) => {
        console.log('params', e.target);
        if (e === 'plus') {
            setCounter(e.target.value)
            //  counter = counter + 1
        }
    }

    return (
        <div className=''>
            <FaArrowLeft onClick={() => navigate('/menu-list')} 
            className="text-left text-xl "/>
            <img src={image1} className="w-full mx-auto border image" />
            <p className='font-bold text-xl m-2 product-name'>Uncle Don's Cap</p>
            <div className="mt-8 mx-2 flex justify-between product details">
                <img src={image1} className="w-1/4 border" />
                <div className='my-auto text-center'>
                    <span className='font-bold text-base'>RM15.50</span>
                    <div className="number">
                        <span className="minus" onClick={(plusminus)}>-</span>
                        <input type="text" value={counter} onChange={(plusminus)} />
                        <span className="plus" onClick={(plusminus)}>+</span>
                    </div>
                </div>
            </div>
            <div className='border-t-2 mt-3 border-gray-200'></div>
            <div className='product-options p-3 '>
                <p className='font-bold pb-2'>Choice of</p>
                <div className='pb-2'>
                    <input type="radio" id="html" name="fav_language" value="HTML" className='h-3 checked:bg-blue-500' />
                    <span className='ml-1'>HTML</span>
                </div>
                <div className='pb-2'>
                    <input type="radio" id="css" name="fav_language" value="CSS" className='h-3' />
                    <span className='ml-1'>CSS</span>
                </div>
                <div className='pb-2'>
                    <input type="radio" id="javascript" name="fav_language" value="JavaScript" className='h-3' />
                    <span className='ml-1'>JavaScript</span>
                </div>

                {/* <input type="radio" className=" checked:bg-blue-500 required:border-red-500 h-3" value={'female'}> Female </input> */}
            </div>
            <p className='text-white mb-28 bg-red-600 rounded-full w-1/2 mx-auto font-bold py-2 text-center'
             onClick={() => navigate('/menu-list')} >Add</p>
        </div>
    );
}

export default ProductDetail;