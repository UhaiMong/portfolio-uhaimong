import React from 'react';
import img from '../../../../assets/img/me.jpg'

const AboutMe = () => {
    return (
        <section class="about" id="about">
            <div class="max-width">
                <h2 class="title">About me</h2>
                <div class="about-content">
                    <div class="column left">
                        <img src={img} alt="Profile" />
                    </div>

                    <div class="column right">
                        <div class="text">I am <span class="typing-2"></span></div>


                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        <a download="" href="img/Uhai_Mong_Web_Developer.pdf">Download -CV</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;