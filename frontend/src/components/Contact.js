import React, { useState } from 'react';
const Contact = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
    return (
      <div className='contactContainer'>
        <form className='contactForm'>
            <h1>Contact Us Today!</h1>
            <p>Phone: (970) 230-2418 <br /><br /> or send us a message!</p>

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

            <input type="Submit" value="Submit"></input>
        </form>
        </div>
    )
}

export default Contact;