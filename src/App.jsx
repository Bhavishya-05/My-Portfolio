import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import SidebarSocials from "./Components/Sidebar/SidebarSocials";

function App() {
  return (
    <>
      <div className="bg-[#171d32] h-auto w-full overflow-hidden">
        <SidebarSocials />
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
