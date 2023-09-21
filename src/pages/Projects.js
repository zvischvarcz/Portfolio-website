import React from "react";
import { projectArray } from "../data"

const Projects = () => {

    return (
        <div>
            <h1 className="pageTitle">Projects</h1>
            <p className="pageDesc">Here You will find a breif overview of some of my projects.</p>
            <div className="allProjectsWrap">
                {projectArray.map((project, index) => {
                    return (
                        <div key={index} className="eachProjectWrap">
                            <h3>{project.name}</h3>
                            <img className="projectImg"  alt="page screenshot" src={project.img} />
                            <div className="descWrap">
                                <p>{project.desc}</p>
                            </div>
                            <a className="projGitHubLink" href={project.link} target="_blank" rel="noreferrer">GitHub Repository</a>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects