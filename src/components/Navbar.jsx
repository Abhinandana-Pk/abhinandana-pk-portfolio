import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration:3 }}
      className="mb-20 flex items-center justify-between py-6"
    >
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-16" src={logo} alt="logo" /> */}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/abhinandana-pk-8a1b63242/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Abhinandana-Pk">
          <FaGithub />
        </a>
        {/* <a href="https://x.com/ALWINANTO101">
          <FaSquareXTwitter />
        </a> */}
        <a href="https://www.instagram.com/jwa_la/?igsh=YXhzN2ZqY2FqeTFq">
          <FaInstagram />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
