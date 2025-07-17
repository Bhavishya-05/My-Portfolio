import ProjectCard from "./ProjectCard";
import nirvanaImg from "../../assets/nirv.png";
import spiceImg from "../../assets/spice.png";
const Projects = () => {
  return (
    <div
      className="px-4 py-10 sm:px-6 md:px-16 lg:px-24 text-white"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Projects</h1>
      <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-10">
        <ProjectCard
          title="Nirvana"
          main="A real estate website built using React.js. Implemented routing, responsive layout, and dynamic listing sections."
          demoLink="https://nirvana-real.netlify.app/"
          sourceLink="https://github.com/Bhavishya-05/Nirvana"
          image={nirvanaImg}
        />
        <ProjectCard
          title="SpiceRoute"
          main="A food ordering web app created with React.js and Tailwind CSS. Built dynamic product listing and cart functionality, used React Router for transitions, and deployed via Vercel."
          demoLink="https://spice-route.vercel.app/"
          sourceLink="https://github.com/Bhavishya-05/SpiceRoute"
          image={spiceImg}
        />
      </div>
    </div>
  );
};

export default Projects;
