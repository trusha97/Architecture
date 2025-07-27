import React from 'react';
import './ProjectMind.css';
import { projectimg } from '../../utils/images';

const ProjectMind = () => {
  return (
    <div className='project-mind-div-main'>
      <p className="top-text">HAVE YOU PROJECT IN MIND?</p>
      <div className="project-mind-main">
        <img src={projectimg} alt="Blueprint" className="blueprint-image" />

        <div className="overlay1">
          <h1 className="heading">
            Create Your Creative <br />
            Unique Design
          </h1>
          <button className="contact-button">
            Contact Design <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectMind;
