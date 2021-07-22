import React from 'react';
import Separator from '../../common/separator';
import "./contact.css";
import PersonalContact from '../../common/personal-contact';
function Contact() {
    return (
        <div className="contact">
            <Separator />
            <label className="section-title">About</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>I am an aspiring programmer who enjoys solving challenging problems. I have strong technical skills and an academic background in Information Technology engineering. My passion lies in participating in solving real-world problems. And I use Mern Stack for Development Purpose.

                        <br /> <br />In my graduate studies, I learnt many technical courses which include data structure and algorithms, object oriented programming, DBMS etc.

                        <br />
                        <br />Skills-
                        <br />1. Vast knowledge of Data structures and Algorithms
                        <br />2. Have a good grip on HTML, CSS, Javascript, ReactJS
                        <br />3. Familiar with Web-dev - Selenium, Puppeteer
                        <br />4. Database Knowledge- MongoDB, MySQL

                        <br />i love💖 Problem Solving✍</p>
                    <p>I'm graduating in 2022 and I'm interested in a full-time Software Developer , Front-End Developer or other technical profiles as per my skills. Please feel free to get in touch with me on any of the platforms.</p>
                    <PersonalContact />
                    <br />
                    <div className="download">
                    <a download href={require('../../../assets/Resume_Vipin.pdf').default}>
                        <i class="fi-rr-download dowload-icon"></i>
                        Download Resume
                    </a>
                </div>
                </div>
                {/* <div className="download">
                    <a download href={require('../../../assets/Resume_Vipin.pdf').default}>
                        <i class="fi-rr-download dowload-icon"></i>
                        Download Resume
                    </a>
                </div> */}
                <img src={require('../../../assets/mypic.png').default} className="mypic" />
            </div>
        </div>
    )
}
export default Contact;