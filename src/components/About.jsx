import Image from "next/image";
import { aboutData } from "./data.js";

const About = () => {
    return (
        <div id="About" className="about-container">
            <h2>About Me</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>{aboutData}</p>
                </div>
                <div className="about-img">
                    <Image src='/images/about.jpg' className="profile-img" width={300} height={500} alt="Konuralp and wolf in a park having fun" />
                </div>
            </div>
        </div>

    )
}

export default About;
