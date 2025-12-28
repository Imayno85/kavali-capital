import { useState, useEffect, useRef } from "react";
import { close, klogo_com_bw, klogo_light, menu } from "../assets";
import { navLinks } from "../constants";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);
  const { theme } = useTheme();

  // Select logo based on current theme
  const logoSrc = theme === 'light' ? klogo_light : klogo_com_bw;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    // Attach event listener to handle clicks outside the menu
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty dependency array means this effect runs once

  const customScrollTo = (element) => {
    const offsetTop = element.offsetTop;
    const scrollOptions = {
      left: 0,
      top: offsetTop,
      behavior: "smooth",
    };

    window.scrollTo(scrollOptions);
  };

  const handleLinkClick = (navId) => {
    const element = document.getElementById(navId);
    if (element) {
      customScrollTo(element);
      setActive(navId);
      setToggle(false);
    }
  };

  return (
    <nav className="w-full flex justify-between items-center navbar py-6 transition-all duration-300">
      {/* Logo */}
      <div className="flex items-center">
        <a
          href="/"
          className="cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => setActive("Home")}
        >
          <img
            src={logoSrc}
            alt="kavali_logo"
            className="w-[276px] h-[92px]"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </a>
      </div>

      {/* Toggle button for mobile - Hidden when menu is open */}
      {!toggle && (
        <div className="flex flex-1 mr-4 justify-end items-center md:hidden">
          <img
            src={menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer mobile-menu-icon"
            onClick={() => setToggle(true)}
          />
        </div>
      )}

      {/* Modern Mobile Menu - Slide-in from right */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-[280px] bg-primary backdrop-blur-xl shadow-2xl transform transition-transform duration-300 ease-out z-[100] ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
        ref={menuRef}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4">
          <h3 className="font-poppins font-semibold text-white text-base">Menu</h3>
          <button
            onClick={() => setToggle(false)}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-surface-secondary transition-colors z-[110]"
            aria-label="Close menu"
          >
            <img src={close} alt="close menu" className="w-4 h-4 mobile-menu-icon" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <ul className="list-none flex flex-col px-3 pt-2 pb-3 space-y-1 overflow-y-auto max-h-[calc(100vh-140px)]">
          {navLinks.map((nav, index) => (
            <li key={nav.id}>
              <span
                onClick={() => handleLinkClick(nav.id)}
                className={`block px-3 py-2.5 rounded-lg font-poppins font-medium cursor-pointer text-[14px] transition-all duration-200 ${
                  active === nav.id
                    ? "bg-orange-gradient text-white shadow-md"
                    : "text-dimWhite hover:bg-surface-secondary hover:text-white"
                }`}
              >
                {nav.title}
              </span>
            </li>
          ))}

          {/* Theme Toggle in Mobile Menu */}
          <li className="pt-3 mt-3">
            <div className="flex items-center justify-between px-3 py-2">
              <span className="font-poppins text-dimWhite text-xs font-medium">Theme</span>
              <ThemeToggle />
            </div>
          </li>
        </ul>

        {/* Mobile Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-primary">
          <p className="text-dimWhite/60 text-[10px] text-center">
            © 2025 Kavali Capital Limited
          </p>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {toggle && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
          onClick={() => setToggle(false)}
        />
      )}

      {/* Modern Desktop Menu */}
      <ul className="list-none md:flex hidden justify-end items-center flex-1 lg:mr-6 gap-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} style={{ animationDelay: `${index * 50}ms` }} className="animate-fadeIn">
            <span
              onClick={() => handleLinkClick(nav.id)}
              className={`relative px-5 py-2.5 rounded-xl font-poppins font-medium cursor-pointer text-[15px] transition-all duration-300 block ${
                active === nav.id
                  ? "text-white bg-orange-gradient shadow-lg scale-105"
                  : "text-dimWhite hover:text-white hover:bg-surface-secondary/80 hover:scale-105"
              }`}
            >
              {nav.title}
              {/* Active underline indicator */}
              {active === nav.id && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white/50 rounded-full" />
              )}
            </span>
          </li>
        ))}

        {/* Theme Toggle with label */}
        <li className="ml-4 pl-4 border-l border-dimWhite/10">
          <div className="flex items-center gap-3 px-2">
            <span className="text-dimWhite text-sm font-poppins hidden lg:block font-medium">Theme</span>
            <ThemeToggle />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
