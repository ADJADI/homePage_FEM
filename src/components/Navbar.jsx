import React, { useState } from "react";
import down from "../assets/images/icon-arrow-down.svg";
import up from "../assets/images/icon-arrow-up.svg";
import logoTodo from "../assets/images/icon-todo.svg";
import logoCalendar from "../assets/images/icon-calendar.svg";
import logoReminder from "../assets/images/icon-reminders.svg";
import logoPlanning from "../assets/images/icon-planning.svg";
import hamburger from "../assets/images/icon-menu.svg";
import close from "../assets/images/icon-close-menu.svg";

export default function Navbar({ isNavbarOpen, handleNavbar }) {
  const [isClickFeature, setIsClickFeature] = useState(false);
  const [isClickCompany, setIsClickCompany] = useState(false);

  const handleToggleFeature = () => {
    setIsClickFeature(!isClickFeature);
  };
  const handleToggleCompany = () => {
    setIsClickCompany(!isClickCompany);
  };

  const Features = [
    {
      logo: logoTodo,
      name: "Todo List",
    },
    {
      logo: logoCalendar,
      name: "Calendar",
    },
    {
      logo: logoReminder,
      name: "Reminders",
    },
    {
      logo: logoPlanning,
      name: "Planning",
    },
  ];

  return (
    <nav className="flex items-center h-16 px-4 cursor-pointer font-semibold gap-[60px] text-almostBlack md:h-20 md:px-10">
      {isNavbarOpen && (
        <div className="w-[64%] absolute top-0 pt-[68px] text-[18px] bg-white z-50 min-h-full right-0 flex flex-col p-4 md:hidden">
          <ul className="flex flex-col gap-4 p-2">
            <li className="flex flex-col gap-3">
              <button
                onClick={handleToggleFeature}
                className="flex items-center gap-[18px]"
              >
                <span>Features</span>
                {!isClickFeature ? (
                  <img src={down} alt="logo_arrow_down" />
                ) : (
                  <img src={up} alt="up" />
                )}
              </button>
              {isClickFeature && (
                <div className="flex pl-6 pb-2.5 pt-3 gap-3.5 flex-col ">
                  {Features.map((feature) => (
                    <ul key={feature.name} className="flex items-center gap-5">
                      <li>
                        <img src={feature.logo} alt="" />
                      </li>
                      <li>{feature.name}</li>
                    </ul>
                  ))}
                </div>
              )}
            </li>
            <li className="flex flex-col gap-3">
              <button
                onClick={handleToggleCompany}
                className="flex items-center gap-3"
              >
                <span>Company</span>
                {!isClickCompany ? (
                  <img src={down} alt="logo_arrow_down" />
                ) : (
                  <img src={up} alt="up" />
                )}
              </button>
              {isClickCompany && (
                <ul className="flex gap-4 pb-2.5 pl-6  flex-col">
                  <li>History</li>
                  <li>Our Team</li>
                  <li>Blog</li>
                </ul>
              )}
            </li>
            <li>Careers</li>
            <li className="flex items-center gap-3">
              <button>About</button>
            </li>
          </ul>
          <section className="flex -mt-1 w-full flex-col p-5 gap-1.5 items-center">
            <span>login</span>
            <button className="border border-black mt-1 rounded-xl px-16 py-2 ">
              Register
            </button>
          </section>
        </div>
      )}

      <h1
        className={`text-4xl font-[800] -mt-[11px] pl-0.5 ${
          isNavbarOpen ? "opacity-10 md:opacity-100" : ""
        }`}
      >
        snap
      </h1>
      <div className="flex justify-between w-full ">
        <div className="hidden md:flex">
          <ul className=" gap-8 items-center flex ">
            <li className="flex items-center gap-3">
              <button
                onClick={handleToggleFeature}
                className="hover:text-mediumGray flex items-center gap-3"
              >
                <span>Features</span>
                {!isClickFeature ? (
                  <img src={down} alt="logo_arrow_down" className="mt-1" />
                ) : (
                  <img src={up} alt="up" className="mt-1" />
                )}
                {isClickFeature && (
                  <div className="flex gap-2 flex-col p-6 bg-white absolute left-[115px] top-[68px] rounded-lg shadow-xl drop-shadow-2xl ">
                    {Features.map((feature) => (
                      <ul
                        key={feature.name}
                        className="flex items-center gap-3"
                      >
                        <li>
                          <img src={feature.logo} alt="" />
                        </li>
                        <li>{feature.name}</li>
                      </ul>
                    ))}
                  </div>
                )}
              </button>
            </li>
            <li className="flex items-center gap-3">
              <button
                onClick={handleToggleCompany}
                className="hover:text-mediumGray flex items-center gap-3"
              >
                <span>Company</span>
                {!isClickCompany ? (
                  <img src={down} alt="logo_arrow_down" className="mt-1" />
                ) : (
                  <img src={up} alt="up" className="mt-1" />
                )}
                {isClickCompany && (
                  <ul className="flex gap-3 flex-col px-7 py-4 absolute left-[308px] top-[68px] bg-white shadow-xl drop-shadow-2xl rounded-lg">
                    <li>History</li>
                    <li>Our Teal</li>
                    <li>Blog</li>
                  </ul>
                )}
              </button>
            </li>
            <li className="hover:text-mediumGray pl-1">Careers</li>
            <li className="flex items-center gap-3 hover:text-mediumGray">
              <button className="pl-2">About</button>
            </li>
          </ul>
        </div>
        <section className="gap-10 items-center hidden md:flex">
          <span>Login</span>
          <button className="border-2 border-black w-full  rounded-xl py-1.5 px-5 mt-1 ">
            Register
          </button>
        </section>
      </div>
      <button
        onClick={handleNavbar}
        className="h-16 flex items-center justify-end w-full md:hidden"
      >
        {isNavbarOpen ? (
          <img src={close} alt="" className="z-50 pr-1 md:pr-0" />
        ) : (
          <img src={hamburger} alt="" className="z-50 " />
        )}
      </button>
    </nav>
  );
}
