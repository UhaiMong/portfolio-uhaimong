import React from 'react';
import img from '../../../../assets/img/me.jpg'
import { Typewriter } from 'react-simple-typewriter';

const AboutMe = () => {
    return (
        <section className="about" id="about">
            <div className="max-width">
                <h2 className="title">About me</h2>
                <div className="about-content">
                    <div className="column left">
                        <img src={img} alt="Profile" />
                    </div>

                    <div className="column right">
                        <div>
                            <p className="text">Uhai Mong </p>
                        </div>
                        <div className="text">I am <span className="typing-2"></span>
                            <span style={{ color: 'crimson', fontWeight: 'bold' }}>
                                <Typewriter
                                    words={['Front-end Developer', 'React Developer', 'JavaScript Developer', 'Node js']}
                                    cursor
                                    loop={Infinity}
                                    cursorStyle='❤️'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </div>


                        <div className='bio-data'>
                            <span>
                                <p>Age</p>
                                <p>Education</p>
                                <p>Skill</p>
                                <p>Email</p>
                                <p>Address</p>
                            </span>
                            <span>
                                <p>: 23</p>
                                <p>: BSc of CSE</p>
                                <p>: MERN Developer</p>
                                <p>: uhaimarma2016@gmail.com</p>
                                <p>: Bandarban, Bangladesh</p>
                            </span>
                        </div>
                        <a href='#contact'>Contact me</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;