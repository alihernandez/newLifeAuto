const Contact = (props) => {

    return (
        <form>
            <h1>Contact Us Today!</h1>
            <label>Name:</label>
            <input></input>
            <label>Email:</label>
            <input></input>
            <label>Phone:</label>
            <input></input>
            <label>Message:</label>
            <textarea
              type="text"
            //   onChange={handleMessage}
            //   value={message}
              placeholder="your message here..."
              name="message"
            />
        </form>
    )
}

export default Contact;