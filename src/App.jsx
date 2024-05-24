import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

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
        <Navbar isNavbarOpen={isNavbarOpen} handleNavbar={handleNavbar} />
        <Home isNavbarOpen={isNavbarOpen} />
      </div>
    </>
  );
}
export default App;
