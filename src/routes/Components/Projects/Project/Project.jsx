import parse from "html-react-parser";

export default function Project(props) {
    const project = props.project;
    return (
        <div className="project-item">
            <div className="project-details">
                <h3>{project.name}</h3>
                <div className="description">
                    <p>{ project.desc1 }</p>
                    <p>{ parse(project.desc2) }</p>
                </div>
                <div className="technologies">
                    { project.technologies.map((tech, index) => <div key={`key${index}`}>{ tech }</div>) }
                </div>
                <div className="btns">
                    <a href={project.visitLink} target="_blank" className="btn primary">Visit Site</a>
                    <a href={`/case-study/${project.caseStudy}`} className="btn secondary">Case Study</a>
                </div>
            </div>
            <img src={ project.imageLink } alt={ `${project.name} Preview` } />
        </div>
    );
}