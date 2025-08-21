import {
  LucideHouse,
  LucideLayoutDashboard,
  LucideMoon,
  LucideSend,
  LucideSmile,
  LucideSun,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import GlassSurface from "../utilities/GlassSurface";
import DarkMode from "@/utilities/DarkMode";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [useGlass, setUseGlass] = useState(false); // user’s choice

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  const menuItems = [
    {
      href: "/",
      label: "Home",
      icon: <LucideHouse width={18} height={18} strokeWidth={2} />,
    },
    {
      href: "/about",
      label: "About",
      icon: <LucideSmile width={18} height={18} strokeWidth={2} />,
    },
    {
      href: "/projects",
      label: "Projects",
      icon: <LucideLayoutDashboard width={18} height={18} strokeWidth={2} />,
    },
    {
      href: "/contact",
      label: "Contact",
      icon: <LucideSend width={18} height={18} strokeWidth={2} />,
    },
  ];

  return (
    <div>
      <nav className="bg-navbar-bg fixed sm:flex z-50 items-center justify-between max-w-[1280px] w-full px-10 py-2 rounded-[40px] top-4 left-1/2 transform -translate-x-1/2 hidden">
        <Link to="/" className="font-clash-medium text-xl text-primary">
          SS
        </Link>

        <ul className="font-satoshi-regular text-sm flex-center gap-6 text-dim">
          <li>
            <Link to="/">
              <span>
                <div className="relative overflow-hidden group w-fit">
                  <p className="group-hover:-translate-y-7 transition-transform duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                    Home
                  </p>
                  <p className="absolute top-7 left-0 group-hover:top-0 transition-all duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] text-nav-elements-hover">
                    Home
                  </p>
                </div>
              </span>
            </Link>
          </li>

          <li>
            <Link to="/about">
              <span>
                <div className="relative overflow-hidden group w-fit">
                  <p className="group-hover:-translate-y-7 transition-transform duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                    About
                  </p>
                  <p className="absolute top-7 left-0 group-hover:top-0 transition-all duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] text-nav-elements-hover">
                    About
                  </p>
                </div>
              </span>
            </Link>
          </li>

          <li>
            <Link to="/projects">
              <span>
                <div className="relative overflow-hidden group w-fit">
                  <p className="group-hover:-translate-y-7 transition-transform duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                    Projects
                  </p>
                  <p className="absolute top-7 left-0 group-hover:top-0 transition-all duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] text-nav-elements-hover">
                    Projects
                  </p>
                </div>
              </span>
            </Link>
          </li>

          <li>
            <Link to="/contact">
              <span>
                <div className="relative overflow-hidden group w-fit">
                  <p className="group-hover:-translate-y-7 transition-transform duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] ">
                    Contact
                  </p>
                  <p className="absolute top-7 left-0 group-hover:top-0 transition-all duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] text-nav-elements-hover">
                    Contact
                  </p>
                </div>
              </span>
            </Link>
          </li>
        </ul>

        <button
          onClick={toggleTheme}
          className="flex rounded-full p-2 items-center gap-2 text-primary hover:cursor-pointer hover:bg-toggle-hover hover:transition-all duration-500"
        >
          {darkMode ? (
            <LucideMoon width={18} height={18} strokeWidth={2} />
          ) : (
            <LucideSun width={18} height={18} strokeWidth={2} />
          )}
        </button>
        {/* <DarkMode /> */}
      </nav>

      <nav className="sm:hidden">
        <div className="flex justify-between items-center fixed top-0 w-full p-4 bg-transparent z-50">
          <a href="/" className="font-clash-medium text-2xl z-50 text-primary">
            SS
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="backdrop-blur-lg border-1 flex-center rounded-full h-10 w-10 z-50 text-primary"
          >
            {darkMode ? (
              <LucideMoon width={20} height={20} strokeWidth={2} />
            ) : (
              <LucideSun width={20} height={20} strokeWidth={2} />
            )}
          </button>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 bg-gradient-to-b from-nav-gradient to-transparent"></div>
          <div className="fixed top-4 right-16 z-50">
            <button
              onClick={() => setUseGlass(!useGlass)}
              className="px-4 py-2 rounded-lg bg-body-secondary text-primary text-sm"
            >
              {useGlass ? "Switch to Normal" : "Switch to Glass"}
            </button>
          </div>
        </div>

        {/* Toggle button to switch navbar style */}

        {/* Conditional rendering */}
        {useGlass ? (
          <div className="border-[0px] border-white text-primary rounded-full max-w-[400px] flex-center fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[75%] mx-auto transition-all duration-500 ease-in-out">
            <GlassSurface
              width="100%"
              borderRadius={30}
              displace={0}
              distortionScale={15}
              redOffset={2}
              greenOffset={6}
              blueOffset={10}
              brightness={95}
              opacity={0.15}
              backgroundOpacity={0}
              saturation={1}
              blur={0}
              mixBlendMode="difference"
              className="transform-gpu will-change-transform"
            >
              <ul className="font-satoshi-regular text-xs flex w-full items-center justify-between">
                {menuItems.map((item, index) => (
                  <li key={index} className="flex-1">
                    <a href={item.href} className="flex-center flex-col gap-1">
                      {item.icon}
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </GlassSurface>
          </div>
        ) : (
          <div className="w-full flex-center fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out">
            <ul className="w-full backdrop-blur-md flex justify-evenly rounded-t-3xl border-t font-satoshi-regular text-primary text-xs bg-navbar-bg border-[#e2e8f0]">
              {menuItems.map((item, index) => (
                <li key={index} className="p-4">
                  <a href={item.href} className="flex-center flex-col gap-1">
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* <div className="w-full flex-center fixed bottom-0 left-0 right-0 z-50">
          <ul className="w-full backdrop-blur-md flex justify-evenly rounded-t-3xl border-t font-satoshi-regular text-xs bg-[#fffc]">
            <li className="p-4">
              <a href="/" className="flex-center flex-col gap-1">
                <LucideHouse width={18} height={18} strokeWidth={2} />
                <span>Home</span>
              </a>
            </li>
            <li className="p-4">
              <a href="/about" className="flex-center flex-col gap-1">
                <LucideSmile width={18} height={18} strokeWidth={2} />
                <span className="">About</span>
              </a>
            </li>
            <li className="p-4">
              <a href="/projects" className="flex-center flex-col gap-1">
                <LucideLayoutDashboard width={18} height={18} strokeWidth={2} />
                <span className="">Projects</span>
              </a>
            </li>
            <li className="p-4">
              <a href="/contact" className="flex-center flex-col gap-1">
                <LucideSend width={18} height={18} strokeWidth={2} />
                <span className="">Contact</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="border-[0px] border-white rounded-full max-w-[400px] flex-center fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[75%] mx-auto">
          <GlassSurface
            width="100%"
            // height="100%"
            borderRadius={30}
            displace={0}
            distortionScale={15}
            redOffset={2}
            greenOffset={6}
            blueOffset={10}
            brightness={95}
            opacity={0.15}
            backgroundOpacity={0}
            saturation={1}
            blur={0}
            mixBlendMode="difference"
            className="transform-gpu will-change-transform"
            // style={{willChange: "transform, backdropFilter"}}
          >
            <ul className="font-satoshi-regular text-xs flex w-full items-center justify-between">
              <li className="flex-1">
                <a href="/" className="flex-center flex-col gap-1">
                  <LucideHouse width={18} height={18} strokeWidth={2} />
                  <span className="">Home</span>
                </a>
              </li>
              <li className="flex-1">
                <a href="/about" className="flex-center flex-col gap-1">
                  <LucideSmile width={18} height={18} strokeWidth={2} />
                  <span className="">About</span>
                </a>
              </li>
              <li className="flex-1">
                <a href="/projects" className="flex-center flex-col gap-1">
                  <LucideLayoutDashboard width={18} height={18} strokeWidth={2} />
                  <span className="">Projects</span>
                </a>
              </li>
              <li className="flex-1">
                <a href="/contact" className="flex-center flex-col gap-1">
                  <LucideSend width={18} height={18} strokeWidth={2} />
                  <span className="">Contact</span>
                </a>
              </li>
            </ul>
          </GlassSurface>
        </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
