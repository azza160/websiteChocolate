/* eslint-disable react/prop-types */
import { BsSearch } from "react-icons/bs";

function SearchBar({ isSearchActive }) {
  return (
    <div
      className={`absolute top-full right-[5%] lg:right-[6%] xl:right-[7%] left-[5%] lg:left-[6%] xl:left-[7%] bg-white text-slate-800 flex justify-between pr-5 items-center duration-300 origin-top ${
        isSearchActive ? "scale-y-100" : "scale-y-0"
      }`}
    >
      <input
        type="search"
        placeholder="cari..."
        className="py-2 lg:py-3 w-full px-5 focus:outline-none"
      ></input>
      <BsSearch className="font-medium text-lg lg:text-xl lg:font-semibold" />
    </div>
  );
}

export default SearchBar;
