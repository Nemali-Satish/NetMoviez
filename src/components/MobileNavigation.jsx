import React from "react";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { MdHomeFilled } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const MobileNavigation = () => {
  const mobileNavigation = [
    {
      label: "Home",
      href: "/",
      icon: <MdHomeFilled />,
    },
    {
      label: "TV Shows",
      href: "tv",
      icon: <PiTelevisionFill />,
    },
    {
      label: "Movies",
      href: "movie",
      icon: <BiSolidMoviePlay />,
    },
    {
      label: "search",
      href: "/search",
      icon: <IoSearchOutline />,
    },
  ];
  return (
    <section className="lg:hidden h-14 bg-black/50 backdrop-blur-lg z-40 fixed bottom-0 w-full">
      <div className="flex items-center justify-between h-full text-neutral-400">
        {mobileNavigation.map((nav, index) => {
          return (
            <NavLink
              key={nav.label + "mobilenavigation"}
              to={nav.href}
              className={({ isActive }) =>
                `px-3 flex h-full items-center flex-col justify-center hover:text-white ${
                  isActive && "text-white"
                }`
              }
            >
              <div className="text-2xl">{nav.icon}</div>
              <p className="text-sm">{nav.label}</p>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default MobileNavigation;
