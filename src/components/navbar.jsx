import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Konuralp's Portfolio
                </Link>
            </div>
            <a href="#Contact" className="cta-btn">Contact me</a>
        </div>
    )
}

export default Navbar;
