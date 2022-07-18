import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';

function EditAddress() {
    let navigate = useNavigate();
    const [message, setMessage] = useState('');

  const handleMessageChange = event => {
    // 👇️ update textarea value
    setMessage(event.target.value);
    console.log(event.target.value);
  };

    return (
        <div>
            <div className='flex w-full p-4 border-b'>
                <div className='flex w-full'>
                    <FaArrowLeft
                        className='icon-size'
                        onClick={() => navigate('/account')} />
                    <span className='ml-4 text-base font-bold'>Share Your Feedback</span>
                </div>
            </div>
            <div>
                <p className='p-4 text-base'>We want your order experience to be perfect. Please submit your thoughts / ideas / suggestions below. </p>
            </div>
            <div className='flex-wrap'>
                <p className='font-bold text-sm m-4'>
                    Select a Category
                </p>
                <div>
                    <span className="text-xs font-bold bg-gray-200 py-1 px-4 rounded-full m-1">
                        Food
                    </span>
                    <span className="text-xs font-bold bg-gray-200 py-1 px-4 rounded-full m-1">
                        Services
                    </span>
                    <span className="text-xs font-bold bg-gray-200 py-1 px-4 rounded-full m-1">
                        App Functionality
                    </span>
                    <span className="text-xs font-bold bg-gray-200 py-1 px-4 rounded-full m-1">
                        Others
                    </span>
                </div>

            </div>
            <div className='flex-wrap mt-8 px-4'>
                <p className='font-bold text-sm my-4'>
                    Upload Photos
                </p>
                <input type="file" />
            </div>
            <div className='flex-wrap mt-8 px-4'>
                <p className='font-bold text-sm my-2'>
                    Message
                </p>
                <span>Please provide your contact information if you are not able to register to this app.</span>
                <textarea 
                id="message"
                name="message"
                value={message} 
                placeholder='Input your feedback/suggestion' 
                className='border p-2 my-4 w-full' 
                onChange={handleMessageChange}
                />
                <div className='text-center'>
                <input type="submit"
                    className='bg-red-600 w-1/2 center hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'
                    value="Submit" />
                </div>
            </div>
        </div>
    );
}

export default EditAddress;