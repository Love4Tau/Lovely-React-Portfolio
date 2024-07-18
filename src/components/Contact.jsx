import REACT, { useState } from "react";
import "./Contact.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isValid, setIsValid] = useState(true)

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        setIsValid(validateEmail(e.target.value))
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="input" id="name" value={name} onChange={handleNameChange}required/>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange}required/>

            <label htmlFor="message">Message:</label>
            <input type="message" id="message" value={message} onChange={handleMessageChange}required/>
            {!isValid && <p style={{ color: "red"}}>Invalid Email Entry</p>}
            <button type="submit">Submit</button>
        </form>
        
    )
}

export default Contact;