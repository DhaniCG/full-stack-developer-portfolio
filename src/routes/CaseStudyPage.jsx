import { useEffect, lazy, Suspense } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CaseStudyParticleHeader from "./Components/Particle Header/Case Study Particle Header/CaseStudyParticleHeader";
import CaseStudy from "./Case Study/CaseStudy";
import { projectData } from "./Components/Projects/Project/projectsData";

import "./Styles/CaseStudyPage.css";

export default function CaseStudyPage() {
    const { project } = useParams();

    const currentProject = projectData[project.replace(/-/g, '')];

    useEffect(() => {
        const metaDesc = currentProject.desc1;
        document.title = `${currentProject.name} - Case Study`;
        document.querySelector('meta[name="description"]').setAttribute("content", metaDesc);
    }, []);

    return (
        <div className="case-study">
            <CaseStudyParticleHeader title={ currentProject.name } visitLink={ currentProject.visitLink } />
            <div className="section max-width-wrapper">
                <CaseStudy 
                    projectId={ currentProject.caseStudyId }
                    projectName={ currentProject.name }
                    technologies={ currentProject.technologies } />
            </div>
            <div className="btns">
                <a href="/case-study" className="btn secondary">
                    <img src="/back-arrow.svg" alt="" />
                    Back to Projects
                </a>
                <a href={currentProject.visitLink} target="_blank" className="btn primary">Visit Site</a>
            </div>
        </div>
    );
}