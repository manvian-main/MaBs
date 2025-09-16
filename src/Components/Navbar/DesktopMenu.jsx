import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { matchPath, useLocation } from "react-router-dom";

import './Navbar.css';

export default function DesktopMenu({ menu, isOpen, onOpen, onClose }) {
  const location = useLocation();
  const isActive = location.pathname === menu.path;
  const [isClicked, setClicked] = useState(false);
  const hasSubMenu = menu?.subMenu?.length;
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    if (!(isClicked && isOpen)) return;
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setClicked(false);
        onClose && onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isClicked, isOpen, onClose]);

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
  return (
    <li
      className="group/link relative"
      key={menu.name}
      ref={menuRef}
    >
      <span
        className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
        onClick={() => {
          if (isOpen) {
            setClicked(false);
            onClose && onClose();
          } else {
            setClicked(true);
            onOpen && onOpen();
          }
        }}
      >
        <Link
          to={menu.path}
          className={`hover:text-sky-400  transition ${isActive ? "text-sky-400 underline font-bold" : "text-white"
            }`}
        >
          {menu.name}
        </Link>
        {hasSubMenu && (
          <ChevronDown className={`mt-[0.6px] duration-200 ${(isClicked && isOpen) ? "rotate-180" : ""}`} />
        )}
      </span>
      {hasSubMenu && (
        <motion.div
          className="sub-menu bg-black/70 absolute left-1/2 -translate-x-1/2  z-50  min-w-[300px] rounded-xl shadow-lg "
          style={{ left: "100%", transform: "translateX(-50%)" }}
          initial="exit"
          animate={(isClicked && isOpen) ? "enter" : "exit"}
          variants={subMenuAnimate}
          transformOrigin="top center"
        >
          {menu.subMenuHeading ? (
            <div
              className={`grid gap-7 ${menu.gridCols === 3 ? "grid-cols-3" : menu.gridCols === 2 ? "grid-cols-2" : "grid-cols-1"}`}
              style={{ justifyItems: 'start' }}
            >
              {menu.subMenuHeading.map((heading) => {
                const filteredSubMenu = menu.subMenu.filter(
                  (item) => item.category === heading
                );
                // Define isIndustries and isService inside the map callback
                const isIndustries = heading === 'Industries';
               
                const colStyle = isIndustries
                  ? { gridColumnStart: 3, transform: 'translateX(-40%)' }
                  : {};
                return (
                  <div key={heading} className="max-h-100 pr-2" style={colStyle}>
                    <p className="text-lg font-semibold mb-4 text-sky-400 sticky top-0  z-10 py-1"
                      style={isIndustries ? { textAlign: 'left', width: '100%' } : {}}>
                      {heading}
                    </p>
                    <div
                      className={`pr-1 ${isIndustries ? 'overflow-y-auto max-h-98 custom-scrollbar' : 'overflow-y-auto max-h-100'}`}
                      style={isIndustries ? { textAlign: 'left' } : {}}
                      onClick={() => {
                        setClicked(false);
                        onClose && onClose();
                      }}
                    >
                      {filteredSubMenu.map((submenu, i) => (
                        <div
                          className="relative cursor-pointer mb-5"
                          key={i}
                        >
                          <HashLink to={submenu.path} className="flex-center gap-x-4 group/menubox"
                            onClick={() => {
                              setClicked(false);
                              onClose && onClose();
                            }}
                          >
                            <div className="flex-center gap-x-4 group/menubox">
                              <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-sky-400 group-hover/menubox:text-white duration-300 text-white ">
                                {submenu.icon && <submenu.icon />}
                              </div>
                              <div>
                                <h6 className="font-semibold text-md text-white group-hover/menubox:text-sky-400 transition-colors duration-300 ">{submenu.name}</h6>
                                <p className="text-sm menu-desc-nowrap text-gray-200 group-hover/menubox:text-gray-400 transition-colors duration-300">{submenu.desc}</p>
                              </div>
                            </div></HashLink>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            menu.name === "Insights" ? (
              <div className="insights-menu">
                <div
                  className={`grid  ${ menu.gridCols === 2 ? "grid-cols-2" : "grid-cols-1"}`}
                >
                  {menu.subMenu.map((submenu, i) => (
                    <div className="relative cursor-pointer mb-1 card" key={i}>
                      <a
                        href="#"
                        className="flex-center gap-x-3 group/menubox"
                        onClick={e => {
                          let detail = null;
                          if (submenu.name === "Our Clients") detail = "clients-logo";
                          if (submenu.name === "Testimonials") detail = "testimonial";
                          if (submenu.name === "News") detail = "news";
                          if (submenu.name === "Blogs") {
                            e.preventDefault();
                            setClicked(false);
                            window.location.href = "/Insights/Articles";
                            return;
                          }
                          if (window.location.pathname === "/insights" && detail) {
                            e.preventDefault();
                            window.dispatchEvent(new CustomEvent("insights-nav", { detail }));
                            setClicked(false);
                            return;
                          } else if (detail) {
                            e.preventDefault();
                            sessionStorage.setItem('insights-scroll-target', detail);
                            setClicked(false);
                            window.location.href = "/insights";
                          } else {
                            setClicked(false);
                            window.location.href = submenu.path;
                          }
                        }}
                      >
                        <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-sky-400 group-hover/menubox:text-white duration-300">
                          {submenu.icon && <submenu.icon />}
                        </div>
                        <div>
                          <h6 className=" font-semibold text-md text-white group-hover/menubox:text-sky-400 transition-colors duration-300  ">{submenu.name}</h6>
                          <p className="text-sm menu-desc-nowrap text-gray-200 group-hover/menubox:text-gray-400 transition-colors duration-300">{submenu.desc}</p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div
                className={`grid gap-7 ${menu.gridCols === 3 ? "grid-cols-3" : menu.gridCols === 2 ? "grid-cols-2" : "grid-cols-1"}`}
              >
                {menu.subMenu.map((submenu, i) => (
                  <div className="relative cursor-pointer mb-5" key={i}>
                    <a
                      href="#"
                      className="flex-center gap-x-4 group/menubox"
                      onClick={e => {
                        setClicked(false);
                        window.location.href = submenu.path;
                      }}
                    >
                      <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-sky-400 group-hover/menubox:text-white duration-300">
                        {submenu.icon && <submenu.icon />}
                      </div>
                      <div>
                        <h6 className=" font-semibold text-md text-white group-hover/menubox:text-sky-400 transition-colors duration-300  ">{submenu.name}</h6>
                        <p className="text-sm menu-desc-nowrap text-gray-200 group-hover/menubox:text-gray-400 transition-colors duration-300">{submenu.desc}</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            )
          )}
        </motion.div>
      )}
    </li>
  );
}
