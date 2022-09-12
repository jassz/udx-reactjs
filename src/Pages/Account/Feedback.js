import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';
import './Feedback.css'

// const formReducer = (state, event) => {
//     return {
//       ...state,
//       [event.target.name]: event.target.value
//     }
//    }

function Feedback() {
    let navigate = useNavigate();

    const [images, setImages] = useState([]);
    const [imageURLS, setImageURLs] = useState([]);
    
    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
        setImageURLs(newImageUrls);
    }, [images]);

    function onImageChange(e) {
        setImages([...e.target.files]);
    }



    const [message, setMessage] = useState('');
    // const [file, setFile] = useState();
    // function handleChange(e) {
    //     setFile(URL.createObjectURL(e.target.files[0]));
    //     e.target.files.map(file => {
    //         setFile(URL.createObjectURL(file))
    //     })
    //     console.log(file);
    // }


    const handleMessageChange = event => {
        setMessage(event.target.value);
    };

    const setCategory = (value) => {
        console.log(value);
    }

    const categories = [
        { id: 1, name: 'Food' },
        { id: 2, name: 'Services' },
        { id: 3, name: 'App Functionality' },
        { id: 4, name: 'Others' }
    ]

    // function getImage(e) {
    //     // Assuming only image
    //     var file = this.useref.file.files[0];
    //     var reader = new FileReader();
    //     var url = reader.readAsDataURL(file);

    //     reader.onloadend = function (e) {
    //         this.setState({
    //             imgSrc: [reader.result]
    //         })
    //     }.bind(this);
    //     console.log(e) // Would see a path?
    //     // setImage(e);
    //     // TODO: concat files
    // }

    // const [formData, setFormData] = useReducer(formReducer, {});
    const [setSubmitting] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
        }, 3000)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex w-full p-4 border-b'>
                <div className='flex w-full'>
                    <FaArrowLeft
                        className='icon-size'
                        onClick={() => navigate('/account')} />
                    <span className='ml-4 text-base font-bold'>Share Your Feedback</span>
                </div>
            </div>
            <div>
                <p className='p-4'>We want your order experience to be perfect. Please submit your thoughts / ideas / suggestions below. </p>
            </div>
            <div className='flex-wrap'>
                <p className='font-bold text-sm mx-4'>
                    Select a Category
                </p>
                <div className='mt-1'>
                    <div className="radio-toolbar">
                        {
                            categories.map((category) => (
                                <span key={category.id}>
                                    <input type="radio"
                                        id={category.id} name="radios"
                                        value={category.id}
                                        onChange={e => setCategory(e.target.value)} />
                                    <label htmlFor={category.id}>{category.name}</label>
                                </span>
                            ))
                        }
                    </div>
                </div>

            </div>
            <div className='flex-wrap mt-4 px-4'>
                <p className='font-bold text-sm my-4'>
                    Upload Photos
                </p>
                {/* <input type="file" /> */}
                {/* <input
                    useref="file"
                    type="file"
                    name="user[image]"
                    multiple={true}
                    onChange={handleChange} /> */}
                {/* <img src={this.state.imgSrc} /> */}
                {/* <img className='w-1/4 mt-4' alt={file} src={file} /> */}

                <input type="file" multiple accept="image/*" onChange={onImageChange} />
                {imageURLS.map((imageSrc) => (
                    <img src={imageSrc} alt="not fount" className='w-1/4 mt-4' />
                ))}

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
                    className='border p-2 my-4 w-full focus:outline-none'
                    onChange={handleMessageChange}
                />
                <div className='text-center'>
                    <input type="submit"
                        className='bg-red-600 w-1/2 center hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'
                        value="Submit" />
                </div>
            </div>
        </form>
    );
}

export default Feedback;