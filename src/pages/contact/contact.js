import React, { useState } from 'react';
import "./contact.css";
import { ImCancelCircle } from "react-icons/im";
import { Toaster, toast } from 'sonner';
import axios from 'axios';

const Contact = ({ setContact }) => {
    const [msg, setMsg] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const hideModal = () => {
        setContact(false);
    };

    const { name, message, email, subject } = msg;

    const handleChange = (e) => {
        const { value, name } = e.target;
        setMsg({ ...msg, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (msg.name.trim() === "" || msg.email.trim() === "" || msg.subject.trim() === "" || msg.message.trim() === "") {
            toast.error("fill all fields");
        } else {
            setIsLoading(true);
            try {
                const response = await axios.post(`http://localhost:5000/submit`, { name, message, email, subject });
                console.log(response);
                if (response.status === 200) {
                    toast.success("message sent");
                    setIsLoading(false);
                    setMsg({ name: '', email: '', subject: '', message: '' }); // Reset state
                }
            } catch (err) {
                console.log(err);
                toast.error("something went wrong");
                setIsLoading(false);
            }
        }
    };

    return (
        <div className='contactSection'>
            <div className='existX' onClick={hideModal}>
                <ImCancelCircle size={25} color='gray' />
            </div>

            <div className='aboutContainer flex-center flex-column gap-10'>
                <div>
                    <h1>Contact Me</h1>
                </div>
                <div className='hrLine'></div>
            </div>

            <div className='flex-center flex-column'>
                <h3 className='messagemeText'>Message Me</h3>
                <Toaster position='top-left' richColors />
                <form onSubmit={handleSubmit}>
                    <div className='messageTextName'>
                        <input type='text' className='inputText1' value={msg.name} name='name' placeholder='Name' required onChange={handleChange} />
                        <input type='email' className='inputText1' value={msg.email} name='email' placeholder='Email' required onChange={handleChange} />
                    </div>

                    <div>
                        <input type='text' className='inputText' value={msg.subject} name='subject' placeholder='Subject' required onChange={handleChange} />
                    </div>
                    <div>
                        <textarea className='inputTextarea' value={msg.message} name='message' placeholder='Message' required onChange={handleChange} />
                    </div>

                    <div className='flex-center'>
                        <input disabled={isLoading} type='submit' className='submitBtn' value={`${isLoading ? "Sending" : "Send Message"}`} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
