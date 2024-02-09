import {useRef} from "react"

async function sendForm(name, email, message, phone, messageTitle) {
    document.getElementById("submitBtn").disabled = true;
    document.getElementById("loading").setAttribute("visibility", "visible");
    await fetch(
        "https://2ef5pfd85g.execute-api.us-east-1.amazonaws.com/default/ContactForm",
        {
            method: "POST",
            mode: "no-cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                message,
                phone,
                messageTitle
            }),
        }
    ).then(r => {
        if (r.ok) {
            return r.json();
        }else{
            throw new Error('Something went wrong');
        }
    }).then(rJson => {
        alert("Your email was sent successfully!");
    }).catch(e => {
        alert("Your email was sent successfully!");
    }).finally(() => {
        document.getElementById("loading").setAttribute("visibility", "hidden");
        document.getElementById("submitBtn").disabled = false;
        clearForm();
    })
}

function clearForm(){
    document.getElementById("contactForm").reset();
}

const Contact = () => {
    const name = useRef(null);
    const email = useRef(null);
    const message = useRef(null);
    const phone = useRef(null);
    const messageTitle = useRef(null);
    return (
        <div id="Contact" className="contact-container">
            <h2>Get In Touch</h2>
            <p>If you want us to work together, have any question or want me to speak at your event, my inbox is always
                open. Whether just want to say hi, I'll try my best to get back to you! Cheers!</p>
            <section className="formcarry-container">
                <form id="contactForm" method="POST" encType="multipart/form-data" onSubmit={(e) => {
                    e.preventDefault()
                    sendForm(
                        name.current.value,
                        email.current.value,
                        message.current.value,
                        phone.current.value,
                        messageTitle.current.value
                    )
                }}>

                    <div className="formcarry-block">
                        <label htmlFor="fc-generated-1-name">Full Name</label>
                        <input type="text" name="name" ref={name} id="contactName" placeholder="Your first and last name" required="required" minLength="2"/>
                    </div>

                    <div className="formcarry-block">
                        <label htmlFor="fc-generated-1-email">Your Email Address</label>
                        <input type="email" name="email" id="contactEmail" ref={email} placeholder="john@doe.com" autoComplete="email" required="required"/>
                    </div>

                    <div className="formcarry-block">
                        <label htmlFor="fc-generated-1-phone">Your Phone (Optional)</label>
                        <input type="tel" name="phone" id="contactPhone" ref={phone}  placeholder="+0 (123) 456-7890" autoComplete="phone"/>
                    </div>

                    <div className="formcarry-block">
                        <label htmlFor="fc-generated-1-title">Title of message</label>
                        <input type="text" name="title" id="messageTitle" ref={messageTitle} placeholder="Title..." autoComplete="title" required="required" minLength={5} maxLength={50}/>
                    </div>

                    <div className="formcarry-block">
                        <label htmlFor="fc-generated-1-message">Your message</label>
                        <textarea name="message" id="fc-generated-1-message" ref={message}
                                  placeholder="Enter your message..." required="required" minLength="5"></textarea>
                    </div>
                    <div className="formcarry-block" id="loading" style={{justifyContent: "center", display: "flex", visibility: "hidden"}}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif" style={{height: "50px", width: "50px", alignItems: "center"}} alt="loading..."/>
                    </div>
                    <div className="formcarry-block">
                        <button id="submitBtn" type="submit">Send</button>
                    </div>

                </form>
            </section>
        </div>
    )
}

export default Contact;
