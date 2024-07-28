import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Menu button */}
      <button
        className="lg:hidden  fixed text-2xl  top-20 right-2   text-white p-2 rounded-full bg-[#6556CD] hover:bg-[#7a66d7]"
        onClick={handleToggleMenu}
      >
        <i className={`ri-menu-${menuOpen ? 'fold' : 'unfold'}-line z-[100]`}></i>
      </button>

      {/* Sidebar */}
      <div
        className={`top-0 fixed left-0 h-full w-full lg:w-1/5 bg-[#1a1d23] p-4 md:p-10 z-40 transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <h1 className="text-xl z-[1000] md:text-2xl text-white font-bold">
          <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
          <span className="text-">Sasta-Netflix</span>
        </h1>

        <nav className="flex flex-col text-zinc-300 text-lg md:text-xl gap-2 md:gap-3">
          <h1 className="text-white font-semibold text-lg md:text-xl mt-5 md:mt-10 mb-3 md:mb-5">
            New Feeds
          </h1>
          <Link to='/trending'
            className="hover:bg-[#6556CD] hover:text-white p-1 md:p-2 rounded duration-300"
            
          >
            <i className="ri-fire-fill"></i>Trending
          </Link>
          <Link
            className="hover:bg-[#6556CD] hover:text-white p-1 md:p-2 rounded duration-300"
            to="/popular"
          >
            <i className="ri-bard-fill"></i>Popular
          </Link>
          <Link
            className="hover:bg-[#6556CD] hover:text-white p-1 md:p-2 rounded duration-300"
            to="/movie"
          >
            <i className="ri-movie-2-line"></i>Movies
          </Link>
          <Link
            className="hover:bg-[#6556CD] hover:text-white p-1 md:p-2 rounded duration-300"
            to="/tvshows"
          >
            <i className="ri-tv-2-line"></i>Tv Shows
          </Link>
          <Link
            className="hover:bg-[#6556CD] hover:text-white p-1 md:p-2 rounded duration-300"
            to="/people"
          >
            <i className="ri-group-line"></i>People
          </Link>
        </nav>

        <hr className="border-none h-[1px] bg-zinc-300 mt-3 md:mt-5" />

        <nav className="flex flex-col text-zinc-300 text-lg md:text-xl gap-2 md:gap-3">
          <h1 className="text-white font-semibold text-lg md:text-xl mt-5 md:mt-10 mb-3 md:mb-5">
            Website Information
          </h1>
          <Link
            className="hover:bg-[#6556CD] hover:text-white p-1 md:p-2 rounded duration-300"
            to="#"
          >
            <i className="ri-information-2-line"></i>About
          </Link>
          <Link
            className="hover:bg-[#6556CD] hover:text-white p-1 md:p-2 rounded duration-300"
            to="#"
          >
            <i className="ri-phone-fill"></i>Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;