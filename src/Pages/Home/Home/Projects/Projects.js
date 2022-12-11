import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [projectData, setProjectData] = useState();
    useEffect(() => {
        fetch('projectData.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProjectData(data)
            })
    },[])
    return (
        <section className="projects" id="projects">
            <div className="max-width">
                <h2 className="title">My Projects</h2>
                <div className="carousel owl-carousel">

                    {
                        projectData?.map(project => <div
                            className="card"
                            key={project._id}
                        >
                            <div className="box">
                                <img src={project.projectImg} alt="project images" />
                                <div className="text">{project.projectName}</div>

                                <div className='card-btn'>
                                    <div className='btn'>
                                        <a href={project.sourceCode}>Source Code</a>
                                    </div>
                                    <div className='btn'>
                                        <Link to={`/projectDetails/${project._id}`}>Explore more</Link>
                                    </div>
                                </div>

                            </div>
                        </div>)
                    }

                </div>
            </div>
        </section>
    );
};

export default Projects;