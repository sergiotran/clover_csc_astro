import React from "react";
import classNames from "classnames";
import { NAVBAR_ITEMS } from "../../constants.js";
import { isCurrentExact } from "../../utils.js";
import Contact from "./contact";

const Navbar = () => {
  const ref = React.useRef();
  const btnRef = React.useRef();
  const pathname = window.location.pathname;
  const [isActive, setIsActive] = React.useState(false);

  const parentClasses = classNames({
    "fixed lg:!translate-x-0 left-0 top-0 h-full w-48 max-w-full bg-white lg:bg-transparent lg:h-auto lg:w-auto lg:relative shadow-lg lg:shadow-none transition duration-300 lg:transition-none": true,
  });
  const navbarItemClasses = "relative";
  const navbarAnchorClasses =
    "px-5 lg:px-0 block text-slate-400 border-b-transparent py-1 uppercase font-bold text-sm hover:lg:text-white hover:text-gray-800 hover:lg:border-b-4 hover:border-b-orange-600 transition duration-300";
  const overlayBg =
    "relative duration-300 after:absolute after:inset-0 after:bg-black after:opacity-60 after:cursor-pointer";

  const handleShow = () => setIsActive(true);
  const handleClose = () => setIsActive(false);

  const handleClickOutside = React.useCallback(
    (e) => {
      if (!ref.current || !btnRef.current || btnRef.current.contains(e.target))
        return;

      if (!ref.current.contains(e.target)) {
        handleClose();
      }
    },
    [ref, btnRef]
  );

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  React.useEffect(() => {
    if (isActive) document.body.className = overlayBg;
    else document.body.className = "";
  }, [isActive]);

  return (
    <>
      <nav
        ref={ref}
        id="navbar"
        className={parentClasses}
        style={{
          transform: `translateX(${isActive ? 0 : "-100%"})`,
        }}
      >
        <ul className="flex flex-col lg:flex-row gap-4 w-full py-10 lg:py-0">
          {NAVBAR_ITEMS.map((item, index) => (
            <li className={navbarItemClasses} key={index}>
              <a
                href={item.href}
                className={classNames({
                  [navbarAnchorClasses]: true,
                  "border-r-4 text-orange-600 !border-r-orange-600 lg:border-b-4 lg:border-r-0 lg:!border-b-orange-600 lg:text-white":
                    isCurrentExact(item.href, pathname),
                })}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className={classNames(navbarItemClasses, "")}>
            <Contact className="lg:hidden text-center px-5" />
          </li>
        </ul>
      </nav>
      <button
        type="button"
        className="lg:hidden block text-white font-bold border border-white rounded-md px-5 py-2 transition duration-300 hover:bg-white hover:text-gray-800"
        onClick={handleShow}
        ref={btnRef}
      >
        Menu
      </button>
    </>
  );
};

export default Navbar;
