import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaBootstrap,
  FaDatabase,
} from "react-icons/fa";
import technians from "../../assets/tech.webp";

const Experience = () => {
  return (
    <div id="Experience" className="px-4 py-10 sm:px-6 md:px-16 lg:px-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-8">
        Experience
      </h1>

      <div className="flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Tech Stack Icons */}
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 md:gap-6 max-w-lg">
            {[
              { icon: <FaHtml5 color="#E34F26" size={40} />, label: "HTML5" },
              { icon: <FaCss3 color="#1572b6" size={40} />, label: "CSS3" },
              {
                icon: <FaBootstrap color="#7952B3" size={40} />,
                label: "Bootstrap",
              },
              { icon: <FaJs color="#F7DF1E" size={40} />, label: "JavaScript" },
              { icon: <FaReact color="#61DAFB" size={40} />, label: "React" },
              { icon: <FaFigma color="#F24E1E" size={40} />, label: "Figma" },
              {
                icon: <FaDatabase color="#4DB33D" size={40} />,
                label: "SQL",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 bg-zinc-950 flex flex-col items-center justify-center rounded-2xl hover:scale-105 duration-200"
              >
                {item.icon}
                <span className="text-sm md:text-xs lg:text-sm text-white mt-2">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="w-full md:w-1/2">
          <div className="flex gap-4 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center">
            <img
              className="w-10 sm:w-14 md:w-20 h-auto object-contain"
              src={technians}
              alt="Technians Logo"
            />
            <div className="text-white">
              <h2 className="text-base sm:text-lg font-semibold">
                Frontend Developer, Technians
              </h2>
              <p className="text-sm font-light">Aug 2023 - April 2024</p>
              <ul className="text-sm mt-1 list-disc list-inside">
                <li>
                  Built and maintained responsive UI components using React and
                  Tailwind CSS
                </li>
                <li>Collaborated with backend team to integrate REST APIs</li>
                <li>
                  Optimized page load speed and ensured cross-browser
                  compatibility
                </li>
                <li>
                  Worked in Agile environment, contributing to sprint planning
                  and reviews
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
