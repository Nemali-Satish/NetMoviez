import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

import { MdHomeFilled } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";

const Header = () => {
  const location = useLocation();

  const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ");
  const [searchInput, setSearchInput] = useState(removeSpace);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    }
  }, [searchInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const navigation = [
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
  ];

  return (
    <header className="fixed top-0 w-full h-16 bg-black/50 backdrop-blur-lg z-40">
      <div className="container mx-auto px-3 flex items-center h-full">
        <Link to={"/"}>
          <img src={logo} alt="logo" width={180} />
        </Link>
        <SignedIn>
          <nav className="hidden lg:flex items-center gap-1 ml-5">
            {navigation.map((nav, index) => {
              return (
                <div key={index}>
                  <NavLink
                    key={nav.label + "header" + index}
                    to={nav.href}
                    className={({ isActive }) =>
                      `px-2 hover:text-neutral-100 ${
                        isActive && "text-neutral-100"
                      }`
                    }
                  >
                    {nav.label}
                  </NavLink>
                </div>
              );
            })}
          </nav>
        </SignedIn>

        <div className="ml-auto flex items-center gap-5">
          <SignedIn>
            <form className="flex items-center gap-2" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search here..."
                className="bg-transparent px-4 py-1 outline-none border-none hidden lg:block"
                onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput}
              />
              <button className="text-2xl text-white hidden lg:block">
                <IoSearchOutline />
              </button>
            </form>
            <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-90 transition-all">
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <button
              className="bg-red-500 p-1 px-3 rounded cursor-pointer active:scale-80 transition-all"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
