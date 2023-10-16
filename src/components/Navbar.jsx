import { useState, useEffect, useRef } from "react";
import { close, klogo_com_bw, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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

  return (
    <nav className="w-full flex justify-between items-center navbar">
      <div className="flex items-center">
        <a
          href="/"
          className="cursor-pointer"
          onClick={() => setActive("Home")}
        >
          <img
            src={klogo_com_bw}
            alt="kavali_logo"
            className="w-[276px] h-[92px]"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </a>
      </div>

      <div className="flex flex-1 mr-4 justify-end items-center md:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
      </div>

      <div
        className={`md:hidden ${
          toggle ? "block" : "hidden"
        } absolute top-[85px] right-0 text-center bg-black-gradient mx-4 my-4 w-[120px] rounded-xl sidebar mr-4`}
        ref={menuRef}
      >
        <ul className="list-none flex flex-col mt-2">
          {navLinks.map((nav) => (
            <li key={nav.id} className="mb-4">
              <span
                onClick={() => handleLinkClick(nav.id)}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.id ? "text-orange-gradient" : "text-dimWhite"
                }`}
              >
                {nav.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <ul className="list-none md:flex hidden justify-end items-center flex-1  lg:mr-6">
        {navLinks.map((nav) => (
          <li key={nav.id}>
            <span
              onClick={() => handleLinkClick(nav.id)}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                active === nav.id ? "text-orange-gradient" : "text-dimWhite"
              } ${
                navLinks.indexOf(nav) === navLinks.length - 1 ? "ml-6" : "ml-10"
              }`}
            >
              {nav.title}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
