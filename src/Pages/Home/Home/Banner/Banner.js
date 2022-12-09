import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import resume from '../../../../assets/img/resume_UhaiMong.pdf'

const Banner = () => {
    return (
        <section class="home" id="home">
            {/* <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#0d47a1",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            /> */}
            <div class="max-width">
                <div class="home-content">
                    <div class="text-1">Hello, my name is </div>
                    <div class="text-2">Uhai Mong </div>
                    <div class="text-3">And I'm a <span class="typing"></span>

                        <span style={{ color: 'red', fontWeight: 'bold' }}>
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
                    <a download='' href={resume}>Download Resume</a>
                </div>
            </div>
        </section>
    );
};

export default Banner;