import { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "@remixicon/react";
import ProfilePic from "../../assets/dp.png";
import { motion } from "framer-motion";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white px-6 py-4 md:px-20 relative z-50 bg-transparent">
      <div className="flex justify-between items-center">
        {/* Logo / Title */}
        <span className="text-xl font-bold tracking-wide">
          <img
            className="w-15 h-15 object-cover rounded-full shadow-md"
            src={ProfilePic}
            alt="dp"
          />
        </span>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 font-semibold">
          <li>
            <a href="#About" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#Experience" className="hover:underline">
              Experience
            </a>
          </li>
          <li>
            <a href="#Projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#Contact" className="hover:underline">
              Contact
            </a>
          </li>
          <li>
            <a
              href="/Bhavishya-Resume.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="bg-[#465697]/80 backdrop-blur-md text-white px-4 py-2 rounded-3xl hover:opacity-85 transition"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          {isOpen ? (
            <RiCloseLine
              size={30}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
            />
          ) : (
            <RiMenu2Line
              size={30}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute top-full left-1/2 -translate-x-1/2 w-[90%] sm:w-4/5  flex flex-col items-center gap-4 bg-gray-900 rounded-xl py-4 font-semibold md:hidden transition-all duration-300 ease-in-out shadow-lg z-500"
        >
          <li>
            <a href="#About" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#Experience" onClick={() => setIsOpen(false)}>
              Experience
            </a>
          </li>
          <li>
            <a href="#Projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#Contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
          <li>
            <a
              href="/Bhavishya-Resume.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="bg-[#465697]/80 backdrop-blur-md text-white px-4 py-2 rounded-3xl hover:opacity-85 transition"
            >
              Resume
            </a>
          </li>
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
