import { caseStudies } from "./caseStudyData";

export default function CaseStudy(props) {
    const caseStudy = caseStudies[props.projectId];

    return (
        <>
            <h3>Description</h3>
            <div>{ caseStudy.description }</div>

            <h3>Technologies Used</h3>
            <ul>{ props.technologies.map((item, i) => <li key={i}>{ item }</li>) }</ul>

            <h3>Challenge</h3>
            <div>{ caseStudy.challenge }</div>

            <h3>Solution</h3>
            <div>{ caseStudy.solution }</div>

            <h3>Results</h3>
            <div>{ caseStudy.results }</div>

            <img src={ `https://drive.google.com/uc?export=view&id=${caseStudy.previewImgId}` } alt={ props.projectName } />
        </>
    );
}