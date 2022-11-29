import React from 'react';
import AboutMe from './Home/AboutMe/AboutMe';
import Banner from './Home/Banner/Banner';
import Contact from './Home/Contact/Contact';
import Projects from './Home/Projects/Projects';
import Services from './Home/Services/Services';
import Skills from './Home/Skils/Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Services></Services>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;