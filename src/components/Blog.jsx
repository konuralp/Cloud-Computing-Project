import Image from "next/image";

const Blog = () => {
    return (
        <div id="Blog" className="blog-container">
            <h2>Blog - Latest Posts</h2>
            <div className="project-card">
                <a className="link-wrapper" href="/blog/AutoFetchLinkedin.pdf">
                    <h3><b>Auto Fetching Professional AWS Website with LinkedIn</b></h3>
                </a>
                <div className="blog-time">
                    <p>1/30/2024 by Konuralp</p>
                </div>
                <div className="flex-blog">
                    <div className="blog-text">
                        <a href="/blog/AutoFetchLinkedin.pdf">
                        <p>I have used Route 53 for domain registration and management, cloudfront cdn for delivery and certificate manager for SSL signature. My frontend is static and developed in next.js, built for production and uploaded into S3 bucket. Api Gateway is where my static code can call for api requests such as sending a Contact Us Form which is in my website to send an email to me containing the filled information on the form...</p>
                        <b>Read More!</b></a>
                    </div>
                    <a className="link-wrapper" href="/blog/AutoFetchLinkedin.pdf">
                        <Image src='/images/blog.png' className="blog-img" width={500} height={300} alt="Blog post showing Architecture of website" />
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Blog;
