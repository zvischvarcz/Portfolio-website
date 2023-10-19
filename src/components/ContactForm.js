import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'


const EmailContactForm = () => {
    const form = useRef();
    const [res, setRes] = useState()

    const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, 
        process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            setRes("Thank you for your submission. I will try to respond as soon as possible.")
        }, (error) => {
            setRes("Unfortunately an error has occured. Please try again later or contact me via one of the above methods")
            console.log(error)
        });
    };

    return (
    <form className='emailForm' ref={form} onSubmit={sendEmail}>
        <label className='fieldLabel'>Name:<sup className="star">*</sup></label>
        <input className='formInput' type="text" name="name" required/>
        <label className='fieldLabel'>Email:<sup className="star">*</sup></label>
        <input className='formInput' type="email" name="email" required/>
        <label className='fieldLabel'>Contact number:</label>
        <input className='formInput' type="number" name="number"/>
        <label className='fieldLabel'>Company:</label>
        <input className='formInput' type="text" name="company"/>
        <label className='fieldLabel'>Message:</label>
        <textarea className='formInput' name="message" />
        <div>
        <input className='submitForm' type="submit" value="Send" />
        <p className='resMsg'>{res}</p>
        </div>
    </form>
    );
    };

export default EmailContactForm;