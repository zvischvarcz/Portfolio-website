import React from "react";
import zviImg from "../Resorces/zviPic.jpg"

const About = () => {

    return (
        <div>
        <h1 className="pageTitle">About me</h1>
            <div className="aboutPageContents">
                <img className="zviImg" src={zviImg} alt="me" />
            </div>
        </div>
    )
}

export default About