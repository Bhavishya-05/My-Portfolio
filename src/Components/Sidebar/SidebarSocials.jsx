import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SidebarSocials = () => {
  return (
    <section className="fixed top-[40%] left-0 flex flex-col items-center gap-6 px-2 py-5 z-50 ">
      {/* Top Line */}
      <div className="w-px h-10 bg-gradient-to-b from-[#465697] to-transparent" />

      {/* Icons */}
      <a
        href="https://github.com/Bhavishya-05"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-[#465697] transition-transform duration-300 hover:scale-125"
        title="GitHub"
      >
        <FaGithub size={26} />
      </a>
      <a
        href="https://www.linkedin.com/in/bhavishya-pant-906a6b208/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-[#465697] transition-transform duration-300 hover:scale-125"
        title="LinkedIn"
      >
        <FaLinkedin size={26} />
      </a>
      <a
        href="mailto:bhavishyapant05@gmail.com"
        className="text-white hover:text-[#465697] transition-transform duration-300 hover:scale-125"
        title="Email"
      >
        <FaEnvelope size={26} />
      </a>

      {/* Bottom Line */}
      <div className="w-px h-10 bg-gradient-to-t from-[#465697] to-transparent" />
    </section>
  );
};

export default SidebarSocials;
