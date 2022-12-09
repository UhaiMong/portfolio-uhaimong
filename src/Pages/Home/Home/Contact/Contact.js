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
        <section class="contact" id="contact">
            <div class="max-width">
                <h2 class="title">contact me</h2>
                <div class="contact-content">
                    <div class="column left">
                        <div class="text">Get our newsletter</div>
                        <p>Drop a message</p>

                        <div class="icons">
                            <div class="rows">
                                <i class="uil uil-user"></i>
                                <div class="info">
                                    <div class="head">Name</div>
                                    <div class="sub-title">Uhai Mong</div>
                                </div>
                            </div>

                            <div class="rows">
                                <i class="uil uil-map-marker"></i>
                                <div class="info">
                                    <div class="head">Address</div>
                                    <div class="sub-title">Bandarban,Chattagram,Bangladesh</div>
                                </div>
                            </div>

                            <div class="rows">
                                <i class="uil uil-envelope-edit"></i>
                                <div class="info">
                                    <div class="head">Email</div>
                                    <div class="sub-title">admin@2021gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="column right">
                        <div class="text">Message me</div>

                        <form ref={form} onSubmit={sendEmail}>
                            <div class="fields">
                                <div class="field name">
                                    <input name='user_name' type="text" required placeholder="Name"/>
                                </div>
                                <div class="field email">
                                    <input name='user_email' type="email" required placeholder="Email"/>
                                </div>

                            </div>

                            <div class="field textarea">
                                <textarea name="message" placeholder="Describe...." id="" cols="30" rows="10" required></textarea>
                            </div>

                            <div class="button">
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