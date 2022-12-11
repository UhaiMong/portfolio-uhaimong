import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_49un7vl', 'template_lxm1z3g', form.current, 'jkK6s4dVBJnyxKmUG')
            .then((result) => {
                console.log(result.text);
                console.log("message sent")
                alert("Thank you for messaging me. I will reply your message as soon.");
                form.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section className="contact" id="contact">
            <div className="max-width">
                <h2 className="title">contact me</h2>
                <div className="contact-content">
                    <div className="column left">
                        <div className="text">Get our newsletter</div>
                        <p>Drop a message</p>

                        <div className="icons">
                            <div className="rows">
                                <i className="uil uil-user"></i>
                                <div className="info">
                                    <div className="head">Name</div>
                                    <div className="sub-title">Uhai Mong</div>
                                </div>
                            </div>

                            <div className="rows">
                                <i className="uil uil-map-marker"></i>
                                <div className="info">
                                    <div className="head">Address</div>
                                    <div className="sub-title">Bandarban,Chattagram,Bangladesh</div>
                                </div>
                            </div>

                            <div className="rows">
                                <i className="uil uil-envelope-edit"></i>
                                <div className="info">
                                    <div className="head">Email</div>
                                    <div className="sub-title">admin@2021gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="column right">
                        <div className="text">Message me</div>

                        <form ref={form} onSubmit={sendEmail}>
                            <div className="fields">
                                <div className="field name">
                                    <input name='user_name' type="text" required placeholder="Name"/>
                                </div>
                                <div className="field email">
                                    <input name='user_email' type="email" required placeholder="Email"/>
                                </div>

                            </div>

                            <div className="field textarea">
                                <textarea name="message" placeholder="Describe...." id="" cols="30" rows="10" required></textarea>
                            </div>

                            <div className="button">
                                <button type="submit">send message</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;