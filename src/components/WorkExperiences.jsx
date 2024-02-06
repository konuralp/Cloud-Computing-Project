import { workExpData } from './data.js';

const WorkExperiences = () => {
    return (
        <div id="WorkExperience" className="projects-container">
            <h2>Work Experience</h2>
            <div className="projects-grid">
                {workExpData && workExpData.map((workExp) => (
                    <div className="project-card" key={workExp.id}>
                        <div className="project-header">
                            <h3>{workExp.companyName}</h3>
                            <div className="small-icons">
                                <p>{workExp.date}</p>
                            </div>
                        </div>
                        <h4>{workExp.position}</h4>
                        <h5>{workExp.location}</h5>
                        <br/>
                        {workExp.description.split("\n").map((line) => {
                            return (
                                line==="" ?
                                    <br/>
                                :
                                    <p>{line}</p>
                            )}
                        )}
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default WorkExperiences;
