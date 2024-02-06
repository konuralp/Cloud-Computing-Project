import { educationData } from './data.js';

const Education = () => {
    return (
        <div id="Education" className="projects-container">
            <h2>Education</h2>
            <div className="projects-grid">
                {educationData && educationData.map((education) => (
                    <div className="project-card" key={education.id}>
                        <div className="education-header">
                            <h3>{education.schoolName}</h3>
                            <div className="small-icons">
                                <p>{education.date}</p>
                            </div>
                        </div>
                        <h4>{education.degree}</h4>
                        <br/>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Education;
