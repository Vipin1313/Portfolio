import React from 'react';
import SocialContact from '../../common/social-contact';
import "./about.css";

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    <br />
                    𝐇𝐞𝐥𝐥𝐨 𝐭𝐡𝐞𝐫𝐞, 👋 exciting  Developers 🤩
                    <br />and System.out.println("Coders 🥰") !!
                    <br />I'm <span className="info-name">Vipin Kumar </span>🤗
                    <br />
                    <br />
                    <br />
                </div>
                <div className="about-photo">
                    <img src={require('../../../assets/icons/coding.png').default} className="picture" />
                </div>
            </div>
            <SocialContact />
        </div>
    )
}
export default About;