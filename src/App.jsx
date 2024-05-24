import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import design from "../../design/mobile-menu-expanded.jpg";

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  return (
    <>
      <div
        className={` ${
          isNavbarOpen
            ? "bg-mediumGray h-screen bg-opacity-10 md:bg-white md:h-auto"
            : ""
        }`}
      >
        {/* <img src={design} alt="" className="opacity-20 absolute z-50" /> */}
        <Navbar isNavbarOpen={isNavbarOpen} handleNavbar={handleNavbar} />
        <Home isNavbarOpen={isNavbarOpen} />
      </div>
    </>
  );
}
export default App;
