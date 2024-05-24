import React from "react";
import bgHeroMobile from "../assets/images/image-hero-mobile.png";
import bgHeroDesktop from "../assets/images/image-hero-desktop.png";
import logo1 from "../assets/images/client-databiz.svg";
import logo2 from "../assets/images/client-audiophile.svg";
import logo3 from "../assets/images/client-meet.svg";
import logo4 from "../assets/images/client-maker.svg";

export default function Home({ isNavbarOpen }) {
  const logos = [logo1, logo2, logo3, logo4];

  return (
    <div
      className={`flex justify-center text-[18px] md:p-5 md:items-center h-full pt-3 md:pt-6 xl:h-auto ${
        isNavbarOpen ? " opacity-[10%] md:opacity-100" : ""
      }`}
    >
      <div className="flex flex-col items-center md:p-5 lg:grid lg:grid-cols-2 xl:p-0 xl:h-[800px] xl:w-[90%] xl:max-w-[1200px] xl:grid-rows-1 2xl:w-[1500px] 2xl:h-[950px] 2xl:max-w-full 2xl:pt-28">
        <div className="col-start-2 flex xl:justify-self-end h-full xl:pt-7 xl:px-5 xl:-mr-2 xl:w-[87%] 2xl:pt-0">
          <div className="">
            <img src={bgHeroMobile} alt="" className=" lg:hidden" />
            <img src={bgHeroDesktop} alt="" className="hidden lg:flex" />
          </div>
        </div>
        <div className="col-start-1 row-start-1 flex flex-col h-full md:max-w-[758px] md:pt-5 md:justify-end md:gap-10 xl:pt-0 xl:w-full xl:px-11  xl:justify-normal xl:py-24 2xl:gap-52">
          <div className="flex flex-col items-center gap-5 md:gap-10 md:items-start xl:h-full xl:gap-[58px] 2xl:gap-[80px]">
            <div className="font-[800] pl-1 text-almostBlack flex gap-1.5 pt-10 text-4xl md:block md:font-bold md:pl-0 md:pt-0 md:gap-0 lg:text-6xl xl:text-[82px] xl:pt-6 xl:leading-none 2xl:text-[120px] ">
              <span className="">Make </span>
              <div className="flex gap-1.5 md:gap-4 xl:gap-[23px]">
                <span className="tracking-wider md:tracking-wide">remote</span>
                <span className="tracking-wider">work</span>
              </div>
            </div>
            <p className="text-mediumGray font-semibold tracking-wider text-[18px] text-center md:text-left xl:w-[90%] 2xl:text-2xl">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button className="bg-almostBlack text-almostWhite rounded-xl py-[9px] px-4 mt-1.5 md:px-7 md:ml-0.5 md:-mt-1 tracking-wider font-bold md:py-4 ">
              Learn more
            </button>
          </div>
          <div className="flex h-32 items-center px-6 gap-10 opacity-30 justify-between md:items-end xl:justify-normal xl:items-center ">
            {logos.map((logo) => (
              <span key={logo}>
                <img
                  src={logo}
                  alt="ad_logo"
                  className="md:h-4 xl:h-auto xl:fill-white"
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
