const ProjectCard = ({ title, main, demoLink, sourceLink, image }) => {
  return (
    <div className="w-full sm:w-[16rem] md:w-[18rem] lg:w-[24rem] bg-[#0c0e19] rounded-2xl shadow-xl shadow-slate-900 overflow-hidden flex flex-col">
      <img className="p-4" src={image} alt="Project Banner" />

      <div className="px-4">
        <h3 className="text-xl md:text-2xl font-bold leading-snug">{title}</h3>
        <p className="text-sm md:text-base leading-tight mt-2">{main}</p>
      </div>

      <div className="mt-auto px-4 py-4 flex flex-wrap gap-3 justify-start">
        <a
          href={demoLink}
          target="_blank"
          rel=""
          className="text-white py-2 px-4 text-sm md:text-base hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Demo
        </a>
        <a
          href={sourceLink}
          target="_blank"
          rel=""
          className="text-white py-2 px-4 text-sm md:text-base hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
