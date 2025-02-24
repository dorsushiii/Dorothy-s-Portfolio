import React from 'react';
import './AboutMe.css'; // Import the CSS file

const AboutMe = () => {
    return (
        <div className="about-me" id="about">
            <section className="introduction">
                <h2>Introduction</h2>
                <p>Hi, I'm Dorothy Shaine Q. Samson, a passionate software developer with a love for creating innovative solutions.</p>
            </section>

            <section className="entered-contests">
                <h2>Entered Contests</h2>
                <p>I have participated in various coding contests including Hackathons, Code Jams, and local programming competitions.</p>
            </section>

            <section className="skills-expertise">
                <h2>Skills and Expertise</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>Machine Learning</li>
                </ul>
            </section>

            <section className="current-work">
                <h2>What I'm Currently Working On</h2>
                <p>I'm currently working on a personal project that involves building a full-stack web application using React and Node.js.</p>
            </section>

            <section className="career-goals">
                <h2>Career Goals</h2>
                <p>My career goal is to become a lead software engineer and graphic designer so I could contribute to open-source projects that make a difference.</p>
            </section>

            <section className="personal-touch">
                <h2>Personal Touch</h2>
                <p>Fun fact: I once traveled to Batangas and admired the beauty of the Taal Volcano. In my free time, I enjoy gaming, reading fanfics, and going out for a run.</p>
            </section>

            <section className="call-to-action">
                <h2>Call to Action</h2>
                <p>If you'd like to collaborate or just have a chat, feel free to reach out to me via email dorothyy015@gmail.com or contact my number +63 975 856 4299.</p>
            </section>
        </div>
    );
};

export default AboutMe;