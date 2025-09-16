import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Bolt, Users } from "lucide-react";

export default function MobMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden ",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  return (
    <div>
      <button className="lg:hidden z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className="fixed left-0 right-0 top-16 mt-4 overflow-y-auto h-full bg-black/85 backdrop-blur text-white p-6 pb-10 "
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul>
          {Menus.map(({ name, subMenu }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;

            return (
              <li key={name}>
                <span
                  className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                  onClick={() => setClicked(isClicked ? null : i)} // This will toggle the dropdown on click
                >
                  <Link
                    to={hasSubMenu ? "#" : Menus[i].path} // Navigate only if it's a link with a path
                    className="flex-1"
                    onClick={() => {
                      if (!hasSubMenu) { // Only close if it's not a dropdown
                        setIsOpen(false);
                        setClicked(null);
                      }
                    }}
                  >
                    {name}
                  </Link>

                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto ${isClicked && "rotate-180"}`}
                    />
                  )}
                </span>

                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {/* Static submenu item for "What We Do" - Overview */}
                    {name === "What We Do" && (
                      <Link
                        to="/" // Example path for the static submenu item
                        onClick={() => {
                          setIsOpen(false);
                          setClicked(null);
                        }}
                        className="p-2 flex-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer"
                      >
                        <Bolt size={17} />
                        Overview
                      </Link>
                    )}

                    

                    {/* Dynamic submenu items */}
                    {subMenu &&
                      subMenu
                        .filter((item) =>
                          name === "What We Do"
                            ? item.category === "Service"
                            : true
                        )
                        .map(({ name, icon: Icon, path }) => (
                          <Link
                            to={path}
                            key={name}
                            onClick={() => {
                              setIsOpen(false);
                              setClicked(null);
                            }}
                            className="p-2 flex-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer"
                          >
                            <Icon size={17} />
                            {name}
                          </Link>
                        ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
