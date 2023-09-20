import React from "react";
import { projectArray } from "../data"

const Projects = () => {

    return (
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
    )
}

export default Projects