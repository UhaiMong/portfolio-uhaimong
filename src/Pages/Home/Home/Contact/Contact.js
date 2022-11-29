import React from 'react';

const Contact = () => {
    return (
        <section class="contact" id="contact">
            <div class="max-width">
                <h2 class="title">contact me</h2>
                <div class="contact-content">
                    <div class="column left">
                        <div class="text">Get our newsletter</div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ex in nesciunt magnam iure possimus repellat ipsum. Aperiam quod voluptatem, enim deleniti animi officiis, ipsam qui impedit ipsa, sunt est.</p>

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
                        <form action="">
                            <div class="fields">
                                <div class="field name">
                                    <input type="text" required placeholder="Name"/>
                                </div>
                                <div class="field email">
                                    <input type="email" required placeholder="Email"/>
                                </div>

                            </div>

                            <div class="field">
                                <input type="text" required placeholder="Subject"/>
                            </div>

                            <div class="field textarea">
                                <textarea name="" placeholder="Describe...." id="" cols="30" rows="10" required></textarea>
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