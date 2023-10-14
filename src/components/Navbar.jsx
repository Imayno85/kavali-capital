import { useState, useEffect, useRef } from "react";
import { close, klogo_com_bw, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const scrollToTop = () => {
    customScrollTo(document.body);
    setActive("Home");
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar lg:pr-12">
      <div className="flex items-center">
        <a href="/" className="cursor-pointer" onClick={scrollToTop}>
          <img
            src={klogo_com_bw}
            alt="kavali_logo"
            className="w-[276px] h-[92px]"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </a>
      </div>

      {!isSmallScreen && (
        <ul className="list-none md:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <span
                onClick={() => handleLinkClick(nav.id)}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  active === nav.id ? "text-orange-gradient" : "text-dimWhite"
                } ${
                  navLinks.indexOf(nav) === navLinks.length - 1
                    ? "mr-0"
                    : "mr-10"
                }`}
              >
                {nav.title}
              </span>
            </li>
          ))}
        </ul>
      )}

      <div
        className="md:hidden flex flex-1 justify-end items-center"
        ref={menuRef}
      >
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />

        {toggle && (
          <div className="p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar">
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <span
                    onClick={() => {
                      handleLinkClick(nav.id);
                    }}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.id
                        ? "text-orange-gradient"
                        : "text-dimWhite"
                    } ${
                      navLinks.indexOf(nav) === navLinks.length - 1
                        ? "mb-0"
                        : "mb-4"
                    }`}
                  >
                    {nav.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
