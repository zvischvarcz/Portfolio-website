import React from "react";
import construction from "../Resorces/under-construction.png";

const Home = () => {

    return (
        <div>
        <h1 className="pageTitle">Welcome</h1>
        <p className="pageDesc">This website is currently still under development, however feel free to look around at what has already been built.</p>
        <img className="constructionImg" src={construction} alt="under construction" />

        </div>
    )
}

export default Home