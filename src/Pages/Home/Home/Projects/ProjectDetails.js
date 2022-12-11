import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    const selectedProject = useLoaderData();
    console.log(selectedProject);
    return (
        <div>
            
        </div>
    );
};

export default ProjectDetails;