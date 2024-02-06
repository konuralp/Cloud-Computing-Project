import Image from "next/image";

const Hero = () => {
    return (
        <div id="Hero" className="hero-container">
            <Image src='/images/profile.jpg' className="profile-img" width={500} height={500} alt="Konuralp's personal headshot" />
            <div className="hero-text">
                <h1>Hey, I'm Konuralp 👋</h1>
                <p>
                    I'm a software developer based in San Francisco, United States. I specialize in building exceptional mobile applications, games, web applications and everything in between.
                </p>
                <div className="social-icons">
                    <a
                        href="https://twitter.com/konuralpsenoglu"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a
                        href="https://github.com/konuralp"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/konuralpsenoglu/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;
