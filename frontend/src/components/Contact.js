import React, { useState } from 'react';
const Contact = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
    return (
        <form>
            <h1>Contact Us Today!</h1>

            <label>Name:</label>
            <input
              placeholder='Name'
              value={name}>
              </input>
            
            <label>Email:</label>
            <input
              placeholder='Email Address'
              value={email}>
              </input>
            
            <label>Phone:</label>
            <input
              placeholder='Phone Numer'
              value={phone}>
              </input>
            
            <label>Message:</label>
            <textarea
              type="text"
            //   onChange={handleMessage}
              value={message}
              placeholder="your message here..."
              name="message"
            />
        </form>
    )
}

export default Contact;