import React from 'react';
import highlight2 from '../../assets/images/UD-Express_App_Highlight-2_Flatten.jpg';
import highlight5 from '../../assets/images/UD-Express_App_Homepage_Carousel-4.jpg';
import highlight6 from '../../assets/images/UD-Express_App_Homepage_UDE-Menu_Flatten.jpg';
import highlight7 from "../../assets/images/UD-Express_App_Seperator-1.jpg"
import highlight8 from "../../assets/images/UD-Express_App_Seperator-2.jpg"
import highlight9 from '../../assets/images/UD-Express_App_Homepage_UDE-Outlet_Flatten.jpg'
import { Link } from "react-router-dom";

function Home() {
    return ( 
        <div className=' pb-10'>
            <Link to="/outlet-list">
            <img alt='highlight6' src={highlight6} className="w-full" />
            </Link>
            <img alt='highlight2' src={highlight2} className="w-full" />
            <img alt='highlight7' src={highlight7} className="w-full py-3" />
            <img alt='highlight5' src={highlight5} className="w-full" />
            <img alt='highlight8' src={highlight8} className="w-full py-3" />
            <img alt='highlight5' src={highlight5} className="w-full" />
            <img alt='highlight9' src={highlight9} className="w-full pb-6" />
            <div className='m-5'></div>
        </div>
     );
}

export default Home;