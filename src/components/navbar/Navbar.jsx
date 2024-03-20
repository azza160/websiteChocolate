import { FaSearch } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import NavLinks from "./NavLinks";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Keranjang from "./Keranjang";

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const handleNav = () => {
    setIsNavActive(!isNavActive);
  };

  //state untuk mengelola searchbar
  const [isSearchActive, setIsSearchActive] = useState(false);

  //state untuk mengelola keranjang
  const [isCartActive, setIsCartActive] = useState(false);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 z-[100] md:hidden ${
          isNavActive ? "block" : "hidden"
        }`}
      ></div>
      <nav className="text-slate-100 flex justify-between items-center bg-bgNavbar py-[1.3rem] md:py-[1rem] px-[5%] lg:px-[6% xl:px-[7%]   border-b border-b-[#291f14] fixed md:sticky lg:fixed top-0 left-0 right-0 z-[999999999]">
        <h1 className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl xl:text-[35px] font-bold italic">
          <a href="#">
            Coklat<span className="text-primary">harmoni.</span>
          </a>
        </h1>
        <div
          className={`absolute md:static top-[102%] ${
            isNavActive ? "right-0" : "-right-full"
          } bg-white md:bg-transparent text-slate-800 md:text-slate-100 h-screen md:h-auto w-[330px] md:w-auto pt-8 pb-[100px] md:pb-0 md:pt-0 px-3 md:px-0 sm:pt-5 duration-300`}
        >
          <div className="flex w-full h-full flex-col md:flex-row items-end md:items-center gap-10 sm:gap-6 md:gap-0 overflow-auto md:overflow-hidden">
            <NavLinks setIsNavActive={setIsNavActive} />
          </div>
        </div>
        <div className="flex">
          {isSearchActive ? (
            <IoClose
              className="mx-[0.5rem] hover:text-primary duration-300 cursor-pointer text-[1.5rem] sm:text-[1.5rem] hover:scale-110"
              onClick={() => {
                setIsSearchActive(false);
              }}
            />
          ) : (
            <FaSearch
              className="mx-[0.5rem] hover:text-primary duration-300 cursor-pointer text-[1.2rem] sm:text-[1.4rem] lg:text-[1.5rem] xl:text-[1.6rem] hover:scale-110 "
              onClick={() => {
                setIsNavActive(false);
                setIsSearchActive(true);
                setIsCartActive(false);
              }}
            />
          )}
          {isCartActive ? (
            <IoClose
              className="mx-[0.5rem] hover:text-primary duration-300 cursor-pointer text-[1.5rem] sm:text-[1.5rem] hover:scale-110"
              onClick={() => {
                setIsCartActive(false);
              }}
            />
          ) : (
            <GrCart
              className="mx-[0.5rem] hover:text-primary duration-300 cursor-pointer text-[1.2rem] sm:text-[1.4rem] lg:text-[1.5rem] xl:text-[1.6rem] hover:scale-110"
              onClick={() => {
                setIsCartActive(true);
                setIsNavActive(false);
                setIsSearchActive(false);
              }}
            />
          )}
          {isNavActive ? (
            <IoClose
              onClick={handleNav}
              className="mx-[0.5rem] hover:text-primary duration-300 cursor-pointer text-[1.5rem] sm:text-[1.5rem] hover:scale-110 md:hidden block"
            />
          ) : (
            <HiMiniBars3BottomRight
              onClick={() => {
                handleNav();
                setIsSearchActive(false);
                setIsCartActive(false);
              }}
              className="mx-[0.5rem] hover:text-primary duration-300 cursor-pointer text-[1.3rem] sm:text-[1.5rem] hover:scale-110 md:hidden block"
            />
          )}
        </div>
        <SearchBar isSearchActive={isSearchActive} />
        <Keranjang isCartActive={isCartActive} />
      </nav>
    </>
  );
};

export default Navbar;
