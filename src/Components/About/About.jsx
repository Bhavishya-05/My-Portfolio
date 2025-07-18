import AboutImg from "../../assets/about_Img.png";
import { IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.section
      id="About"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-white bg-[#0c0e19]/60 backdrop-blur-sm rounded-lg shadow-xl border border-white/10 px-6 py-10 md:px-20 md:py-16 mx-4 md:mx-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center md:justify-start">
          <img
            className="h-52 sm:h-64 md:h-80 w-40 sm:w-56 md:w-72 object-contain"
            src={AboutImg}
            alt="About Bhavishya"
          />
        </div>

        {/* Right Side - Info */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            I'm Bhavishya Pant, a Front-End Developer with hands-on experience
            in building responsive web apps using React.js, Tailwind CSS, and
            JavaScript. I love crafting intuitive UIs and solving real-world
            problems through code.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <IoArrowForward size={20} className="mt-1 text-[#A6B1E1]" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold">
                  Frontend Developer
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  Built UI components using React, styled with Tailwind CSS, and
                  ensured responsiveness across devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
