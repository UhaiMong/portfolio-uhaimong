import React from 'react';

const Footer = () => {
    return (
        <footer class="footer" id="footer">
            <div class="footer-container">
                <div class="about-me-footer">
                    <h3>
                        About
                    </h3>
                    <p>We are trying to design UI/UX and develop website with low cost but gorgious. We focus on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include c,c++,Java,HTML, CSS,Bootstrap,JavaScript,Node Js, React,React Native,Flutter for android and iOS.</p>
                </div>
                <div class="catagories">
                    <h3>Categories</h3>
                    <li>Web Development</li>
                    <li>UI/UX design</li>
                    <li>Android</li>
                    <li>iOS</li>
                    <li>Templates</li>
                </div>
                <div class="quick-links">
                    <h3>Quick links</h3>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                    <span>
                        <i class="icon fa-brands fa-facebook"></i>
                        <i class="icon fa-brands fa-youtube"></i>
                        <i class="icon fa-brands fa-instagram"></i>
                        <i class="icon fa-brands fa-dribbble"></i>
                    </span>
                </div>

            </div>
        </footer>
    );
};

export default Footer;