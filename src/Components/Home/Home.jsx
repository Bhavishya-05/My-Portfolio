import TextChanger from "../../TextChanger";

const Home = () => {
  return (
    <section className="text-white flex flex-col-reverse md:flex-row w-full justify-between items-center p-6 sm:p-8 md:p-16 lg:p-20">
      {/* Left Content */}
      <div className="w-full  pt-6 md:pt-10 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
          <TextChanger />
        </h1>
        <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-300 font-medium">
          A front-end developer who loves turning ideas into elegant,
          responsive, and interactive web interfaces that feel as good as they
          look.
        </p>

        <a
          href="#Contact"
          className="mt-1.5 inline-block text-white py-2 px-4 text-xs sm:text-sm md:text-base lg:text-lg hover:opacity-85 duration-300 font-semibold rounded-3xl bg-[#465697] cursor-pointer"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Home;
