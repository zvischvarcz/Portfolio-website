import React from "react";
import { projectArray } from "../data"

const Projects = () => {

    return (
        <div>
            <h1 className="pageTitle">Projects</h1>
            <p className="pageDesc">Here you will find a brief overview of some of my projects. For more feel free to check out my <a href="https://github.com/zvischvarcz">Github profile.</a></p>
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
                            <br />
                            <br />
                            {project.site && <a className="projGitHubLink" href={project.site}  target="_blank" rel="noreferrer">Live site</a>}

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects