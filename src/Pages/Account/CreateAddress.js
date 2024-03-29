import React from 'react';
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import MyGoogleMap from '../../Components/MyGoogleMap';
 
  
function CreateAddress() {
    let navigation = useNavigate();
    // const [fetchingAddresses, setFetchingAddresses] = useState(false);
    // const [addresses, setAddresses] = useState([]);

    return (
        <div>
            <div className='flex w-full p-4 border-b'>
                 <div className='flex w-full'>
                     <FaArrowLeft
                        className='icon-size'
                        onClick={() => navigation('/address')} />
                    <span className='ml-4'>Create Address</span>
                </div>
            </div>
            <div className="main-wrapper">
                <MyGoogleMap />
            </div>
        </div>
    );
}

export default CreateAddress;