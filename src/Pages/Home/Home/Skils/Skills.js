import React from 'react';

const Skills = () => {
    return (
        <section class="skills" id="skills">
            <div class="max-width">
                <h2 class="title">My Skills</h2>
                <div class="skills-content">
                    <div class="column left">
                        <div class="text"> skills and experience </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum dicta inventore mollitia earum? Assumenda, id veritatis ex tenetur maxime reiciendis incidunt quibusdam inventore dolore perferendis ducimus, quam ipsum natus ipsa!</p>
                        <a href="#">Read more</a>
                    </div>


                    {/* <!-- Column right --> */}
                    <div class="column right">
                        <div class="bars">
                            <div class="info">
                                <span>HTML</span>
                                <span>90%</span>

                            </div>
                            <div class="line html"></div>
                        </div>

                        <div class="bars">
                            <div class="info">
                                <span>CSS</span>
                                <span>80%</span>

                            </div>
                            <div class="line css"></div>
                        </div>

                        <div class="bars">
                            <div class="info">
                                <span>JavaScript</span>
                                <span>70%</span>

                            </div>
                            <div class="line js"></div>
                        </div>

                        <div class="bars">
                            <div class="info">
                                <span>React</span>
                                <span>70%</span>

                            </div>
                            <div class="line react"></div>
                        </div>

                        <div class="bars">
                            <div class="info">
                                <span>MongoDB</span>
                                <span>60%</span>
                            </div>
                            <div class="line sql"></div>
                        </div>

                        <div class="bars">
                            <div class="info">
                                <span>NodeJs</span>
                                <span>70%</span>
                            </div>
                            <div class="line node"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;