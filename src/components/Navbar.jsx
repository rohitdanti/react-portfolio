import logo from "../assets/RohitDantiLogo.png";
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6"

const Navbar = () => {
    return (
        <nav className=" mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-14" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-between gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/rohith-danti/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/rohitdanti" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/rohitdanti" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>

            </div>
        </nav>
    );
};
export default Navbar;