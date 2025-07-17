import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Contact"
      className="bg-[#0c0e19]/80 backdrop-blur-md text-white px-6 py-10 md:px-12 md:py-12 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-10">
        {/* Contact Header */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            Contact
          </h1>
          <h3 className="text-sm sm:text-base md:text-xl font-normal mt-2">
            Feel free to reach out!
          </h3>
        </div>

        {/* Contact Info */}
        <ul className="w-full md:w-1/2 text-sm sm:text-base md:text-lg space-y-3">
          <li className="flex items-center gap-3">
            <MdOutlineEmail size={22} />
            <a
              href="mailto:bhavishyapant05@gmail.com"
              className="hover:underline"
            >
              bhavishyapant05@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-3">
            <CiLinkedin size={22} />
            <a
              href="https://www.linkedin.com/in/bhavishya-pant-906a6b208/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/bhavishya-pant
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FaGithub size={22} />
            <a
              href="https://github.com/Bhavishya-05"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/Bhavishya-05
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
