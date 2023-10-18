import React from "react";
import myCV from "../Resorces/CV-Zvi-Schvarcz.pdf"

const Home = () => {
    
    const links = [
        {
            name: "About me",
            desc: "To read about my coding journey click here",
            to: "/about"
        },
        {
            name: "Projects",
            desc: "Here are some of my projects",
            to: "/projects"
        },
        {
            name: "CV",
            desc: "View or download my CV",
            to: myCV
        },
        {
            name: "Contact me",
            desc: "Get in touch!",
            to: "/contact"
        }
    ]

    return (
        <div>
            <div className="homeTitleWrap">
                <h1 className="homePageTitle">Zvi Schvarcz</h1>
            </div>
            <div className="homeSubtitle">
                <span style={{'--i': 1}}>J</span>
                <span style={{'--i': 2}}>u</span>
                <span style={{'--i': 3}}>n</span>
                <span style={{'--i': 4}}>i</span>
                <span style={{'--i': 5}}>o</span>
                <span style={{'--i': 6}}>r</span>
                <span>&nbsp;&nbsp;</span>
                <span style={{'--i': 7}}>S</span>
                <span style={{'--i': 8}}>o</span>
                <span style={{'--i': 9}}>f</span>
                <span style={{'--i': 10}}>t</span>
                <span style={{'--i': 11}}>w</span>
                <span style={{'--i': 12}}>a</span>
                <span style={{'--i': 13}}>r</span>
                <span style={{'--i': 14}}>e</span>
                <span>&nbsp;&nbsp;</span>
                <span style={{'--i': 15}}>D</span>
                <span style={{'--i': 16}}>e</span>
                <span style={{'--i': 17}}>v</span>
                <span style={{'--i': 18}}>e</span>
                <span style={{'--i': 19}}>l</span>
                <span style={{'--i': 20}}>o</span>
                <span style={{'--i': 21}}>p</span>
                <span style={{'--i': 22}}>e</span>
                <span style={{'--i': 23}}>r</span>
            </div>
            <div className="homeBtnsWrap">
                {links.map((link, index) => {
                    return (
                        <div key={index} className="homeBtns btn from-right">
                            <a  href={link.to}  rel={link.to === myCV && "noreferrer"} target={link.to === myCV && "_blank"}>{link.desc}
                            </a>
                        </div>
                    )
                })}
            </div>
            

        </div>
    )
}

export default Home