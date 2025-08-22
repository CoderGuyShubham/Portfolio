import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlassSurface from "../utilities/GlassSurface";
import {
  LucideHouse,
  LucideLayoutDashboard,
  LucideMoon,
  LucideSend,
  LucideSmile,
  LucideSun,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [useGlass, setUseGlass] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
    return isDark;
  });

  const navbarRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth >= 640) {
      // smooth shrink
      gsap.to(navbarRef.current, {
        width: "40%", // shrink to 40%
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "+=250",
          scrub: 0.5,
        },
      });

      // instant background + border toggle
      ScrollTrigger.create({
        trigger: document.documentElement,
        start: "top+=1 top",
        onEnter: () => {
          navbarRef.current.style.backgroundColor = "var(--navbar-bg)";
          navbarRef.current.style.borderColor = "var(--carousel-border)";
        },
        onLeaveBack: () => {
          navbarRef.current.style.backgroundColor = "transparent";
          navbarRef.current.style.borderColor = "transparent";
        },
      });
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newTheme = darkMode ? "light" : "dark";
    const target = newTheme === "dark" ? "#0a0a0d" : "#f6f9fa";

    const overlay = document.createElement("div");
    Object.assign(overlay.style, {
      position: "fixed",
      inset: "0",
      background: target,
      clipPath: "circle(0% at 100% 0%)",
      zIndex: "9999",
      pointerEvents: "none",
      transition: "clip-path 0.8s ease-in-out",
    });
    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
      overlay.style.clipPath = "circle(200% at 100% 0%)";
    });

    setTimeout(() => {
      root.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      setDarkMode(!darkMode);
    }, 450);

    overlay.addEventListener("transitionend", () => overlay.remove());
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
      <nav
        ref={navbarRef}
        className="border border-transparent backdrop-blur-lg fixed sm:flex z-50 items-center justify-between px-6 py-2 max-w-[1250px] w-full rounded-[40px] top-4 left-1/2 transform -translate-x-1/2 hidden"
      >
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
          <span
            id="theme-icon"
            className={`icon-animate ${darkMode ? "moon" : "sun"}`}
          >
            {darkMode ? (
              <LucideMoon width={18} height={18} strokeWidth={2} />
            ) : (
              <LucideSun width={18} height={18} strokeWidth={2} />
            )}
          </span>
        </button>
      </nav>

      <nav className="sm:hidden">
        <div className="flex justify-between items-center fixed top-0 w-full p-4 bg-transparent z-50">
          <a href="/" className="font-clash-medium text-2xl z-50 text-primary">
            SS
          </a>
          <button
            onClick={toggleTheme}
            className="backdrop-blur-lg border-1 flex-center rounded-full h-10 w-10 z-50 text-primary border-carousel-border"
          >
            <span
              id="theme-icon"
              className={`icon-animate ${darkMode ? "moon" : "sun"}`}
            >
              {darkMode ? (
                <LucideMoon width={18} height={18} strokeWidth={2} />
              ) : (
                <LucideSun width={18} height={18} strokeWidth={2} />
              )}
            </span>
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
            <ul className="w-full backdrop-blur-md flex justify-evenly rounded-t-3xl border-t font-satoshi-regular text-primary text-xs bg-navbar-bg border-carousel-border">
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
      </nav>
    </div>
  );
};

export default Navbar;
