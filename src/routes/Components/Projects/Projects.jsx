import Project from "./Project/Project";
import { projectData } from "./Project/projectsData";
import "./Projects.css"

export default function Projects(props) {
    const projects = props.projects;
    return (
        <div className="section projects max-width-wrapper">
            <h2>Projects</h2>
            <div className="projects-container">
                {
                    projects.map((p, i) => {
                        return <Project key={i} project={projectData[p]} />
                    })
                }
            </div>

            {/* Particle Effects */}
            <div className="particles">
                <img src="/home-project-particle-base.png" alt="" />
                <div className="base-particle mask">
                    <div className="bg"></div>
                </div>
                <div className="white-particle mask">
                    <div className="bg"></div>
                </div>
                <div className="rainbow-particle mask">
                    <div className="bg"></div>
                </div>
            </div>
        </div>
    );
}