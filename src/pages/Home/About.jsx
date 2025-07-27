

import React from 'react';
import './About.css';
import { ab_icon, about, favgold, line, Signeture } from '../../utils/images';

const About = () => {
    return (
        <div className='about-bg-div'>
            <div className="about-main-section">
                <div className="about-section">
                    <div className="about-section-main-image">
                        <div className="about-image-div">
                            <div className="about-image-wrapper">
                                <img className="about-image" src={about} alt="about" />
                                <div className="about-ab-image-main">
                                    <img className="about-ab-image" src={ab_icon} alt="ab icon" />
                                </div>
                            </div>
                        </div>

                        {/* Right Side Content */}
                        <div className="about-right-side-main-div">
                            <div className="about-right-side-inner-div">
                                <div className="about-us-div">
                                    {/* Title */}
                                    <div className="about-image-logo">
                                        <img src={favgold} alt="favgold" />
                                        <span className="golden-about-text">About Us</span>
                                    </div>

                                    {/* Heading + Paragraph */}
                                    <div className="Architectural-main-div">
                                        <h2 className="Architectural-text">
                                            "Architectural Iconic Structures Around the World"
                                        </h2>
                                        <p className="Architectural-parg">
                                            It seems like you're asking for ideas or information on creating a title related to architecture.
                                            Could you specify the context? For example, are you looking for a title for a presentation,
                                            an article, a project.
                                        </p>
                                    </div>



                                    {/* Experience & Signature */}
                                    <div className="about-work-section-main">
                                        <div className="about-work-section">
                                            <div className="about-work-text-section">
                                                <h3 className="about-text-main">12+ Work</h3>
                                                <h3 className="about-text-main about-main-text">Professional</h3>
                                                <h3 className="about-text-main">Experience</h3>
                                            </div>
                                            {/* Progress Bars */}
                                            <div className='abbout-renge-main-div'>
                                                <div className="about-progress-bars">
                                                    <div className="progress-item">
                                                        <div className="progress-title">
                                                            <span>Interior Design</span>
                                                            <span>85%</span>
                                                        </div>
                                                        <div className="progress-bar">
                                                            <div className="progress-fill" style={{ width: '85%' }}></div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-item">
                                                        <div className="progress-title">
                                                            <span>Architecture</span>
                                                            <span>90%</span>
                                                        </div>
                                                        <div className="progress-bar">
                                                            <div className="progress-fill" style={{ width: '90%' }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="about-reage-main-div">
                                                    <img className="signeture-about" src={Signeture} alt="signature" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> {/* End Right Side */}
                    </div>
                </div>
                {/* Decorative Line */}
                <div className="signeture-div-in-design">
                    <div className="signeture-image">
                        <img className='about-line-image' src={line} alt="line" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;