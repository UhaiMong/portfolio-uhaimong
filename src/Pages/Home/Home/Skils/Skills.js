import React from 'react';

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="max-width">
                <h2 className="title">My Skills</h2>
                <div className="skills-content">
                    <div className="column left">
                        <div className="text"> skills and experience </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum dicta inventore mollitia earum? Assumenda, id veritatis ex tenetur maxime reiciendis incidunt quibusdam inventore dolore perferendis ducimus, quam ipsum natus ipsa!</p>
                        <a href="/">Read more</a>
                    </div>


                    {/* <!-- Column right --> */}
                    <div className="column right">
                        <div className="bars">
                            <div className="info">
                                <span>HTML</span>
                                <span>90%</span>

                            </div>
                            <div className="line html"></div>
                        </div>

                        <div className="bars">
                            <div className="info">
                                <span>CSS</span>
                                <span>80%</span>

                            </div>
                            <div className="line css"></div>
                        </div>

                        <div className="bars">
                            <div className="info">
                                <span>JavaScript</span>
                                <span>70%</span>

                            </div>
                            <div className="line js"></div>
                        </div>

                        <div className="bars">
                            <div className="info">
                                <span>React</span>
                                <span>70%</span>

                            </div>
                            <div className="line react"></div>
                        </div>

                        <div className="bars">
                            <div className="info">
                                <span>MongoDB</span>
                                <span>60%</span>
                            </div>
                            <div className="line sql"></div>
                        </div>

                        <div className="bars">
                            <div className="info">
                                <span>NodeJs</span>
                                <span>70%</span>
                            </div>
                            <div className="line node"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;