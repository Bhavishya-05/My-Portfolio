import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChanger from "../../TextChanger";

const Home = () => {
  return (
    <div className="text-white flex flex-col-reverse md:flex-row w-full justify-between items-center p-6 sm:p-8 md:p-16 lg:p-20">
      {/* Left Content */}
      <div className="w-full md:w-1/2 pt-6 md:pt-10 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
          <TextChanger />
        </h1>
        <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-300 font-medium">
          Tech Enthusiast
        </p>

        <a
          href="#Contact"
          className="mt-1.5 inline-block text-white py-2 px-4 text-xs sm:text-sm md:text-base lg:text-lg hover:opacity-85 duration-300 font-semibold rounded-3xl bg-[#465697] cursor-pointer"
        >
          Contact Me
        </a>
      </div>

      {/* Right Content (Image) */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          className="w-48 sm:w-64 md:w-80 lg:w-96"
          src={avatarImg}
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Home;
