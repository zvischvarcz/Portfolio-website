import React from "react";
import zviImg from "../Resorces/zviPic.jpg"
import { Link} from "react-router-dom";
import pythonLogo from "../Resorces/python-logo.png"
import mergedLogos from "../Resorces/merged logos.png"
import mergedBackendLogo from "../Resorces/expressSqlMongo.png"
import musikaScreenshot from "../Resorces/musika-sreenshot.png"
import myCV from "../Resorces/CV-Zvi-Schvarcz.pdf"

const About = () => {

    return (
        <div>
            <h1 className="pageTitle">About me</h1>
            <div className="aboutPageContents">
                
                <div className="aboutPagePWrap">
                    <img className="zviImg" src={zviImg} alt="me" />
                    <p>Hello, I'm Zvi Schvarcz, a motivated junior software developer based in Manchester, UK. My journey into the world of coding began after spending 3 ½ years as a sales assistant. Seeking a new challenge, I decided to take the leap and transition into software development, joining <a href="https://wearecodenation.com/" className="codenationLink">Code Nation.</a></p><br/>
                </div>
                <div className="aboutPagePWrap">
                
                    <p>I embarked on this exciting journey with the Software: Develop 3-week course, where I mastered the basics of HTML, CSS, and Python. Together with my talented cohort, we created an intriguing in-terminal RPG using Python, which you can explore on the <Link className="codenationLink" to="/projects">projects</Link> page.</p>
                    <img  src={pythonLogo} className="imgBackground" alt="python logo" />
                </div>
                <div className="aboutPagePWrap mobileColumnReverse">
                    <img  src={mergedLogos} className="imgBackground" alt="Html, Css, javascript, node JS and react logos" />
                    <p>Eager to expand my skillset, I enrolled in the Master: Software 12-week bootcamp. Here, I delved deeper into HTML and CSS, was introduced to JavaScript, React, and the world of API integration. The front-end development part of the course was immensely gratifying.</p>
                </div>
                <div className="aboutPagePWrap">
                
                    <p>The back-end was equally intriguing, as I tackled Express.js, MongoDB, Mongoose, SQL, Sequelize, and the art of connecting front-end and back-end seamlessly.</p><br/>
                    <img  src={mergedBackendLogo} className="imgBackground" alt="express, mySQL and MongoDB logos" />
                </div>
                <div className="aboutPagePWrap mobileColumnReverse">
                    <img  src={musikaScreenshot} alt="screenshot of Music app project" />
                    <p>The pinnacle of my learning journey was a 2-week group project that brought all our skills together. You can explore the results of my hard work and collaboration on the <Link className="codenationLink" to="/projects">projects</Link> page.</p><br/>
                </div>
                <div className="lastText">
                    <p>I'm passionate about software development and always eager to tackle new challenges. When I'm not coding, you can find me exploring the latest industry trends, working on personal projects, and exploring my hobbies and interests.<br/> Join me on this exciting journey as I continue to grow and learn in the world of software development.<br />To view or download my CV please <a rel="noreferrer" target="_blank" className="cvDownloadLink" href={myCV} >click here.</a></p>
                    <br/><br/>
                    
                </div>
            </div>
        </div>
    )
}

export default About