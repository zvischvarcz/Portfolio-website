import React from "react";
import zviImg from "../Resorces/zviPic.jpg"
import { Link} from "react-router-dom";

const About = () => {

    return (
        <div>
        <h1 className="pageTitle">About me</h1>
            <div className="aboutPageContents">
                <img className="zviImg" src={zviImg} alt="me" />
                <p> Hi, I am an aspiring junior software developer based in Manchester, UK. After working for 3 &frac12; years as a sales assistant I decided it was time to change my career path. So I left and joined <a href="https://wearecodenation.com/" className="codenationLink">Codenation</a> to begin the process of becoming a junior developer.</p>
                <p>I started with the Software: Develop 3 week course and learned the basics of HTML, CSS and Python. You can check out the in-teminal RPG that I created with the rest of my cohort in the <Link className="codenationLink" to="/projects">projects</Link> page.</p> 
                <p>After that course finished I signed up for the Master: Software 12 week course in which I learnt HTML and CSS amore in depth, then moved on to Javascript, REACT and interacting with API's which I really enjoyed. This took me to the end of the front-end part of the course. The back-end part consisted of Express.js, MongDB, Mongoose, SQL,Sequelize and linking up the front to the Back-end. Although slightly different I really liked this part as well.</p>  
                <p>The course culminated with a 2 week group project which was really fun.  All the projects that I mad/was involved in can be found in the <Link className="codenationLink" to="/projects">projects</Link> page. </p>
            </div>
        </div>
    )
}

export default About