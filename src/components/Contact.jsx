const Contact = () => {
    return (
        <div id="Contact" className="contact-container">
            <h2>Get In Touch</h2>
            <p>If you want us to work together, have any question or want me to speak at your event, my inbox is always open. Whether just want to say hi, I'll try my best to get back to you! Cheers!</p>
            <section className="formcarry-container">
                <form action="#" method="POST" encType="multipart/form-data">

                    <div className="formcarry-block">
                        <label htmlFor="fc-generated-1-name">Full Name</label>
                        <input type="text" name="name" id="contactName" placeholder="Your first and last name"/>
                    </div>

                    <div className="formcarry-block">
                        <label htmlFor="fc-generated-1-email">Your Email Address</label>
                        <input type="email" name="email" id="contactEmail" placeholder="john@doe.com"/>
                    </div>

                    <div className="formcarry-block">
                        <label htmlFor="fc-generated-1-message">Your message</label>
                        <textarea name="contactMessage" id="fc-generated-1-message"
                                  placeholder="Enter your message..."></textarea>
                    </div>

                    <div className="formcarry-block">
                        <button type="submit">Send</button>
                    </div>

                </form>
            </section>
        </div>
    )
}

export default Contact;
