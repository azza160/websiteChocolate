/* eslint-disable react/prop-types */
import { navLinkss } from "../../utils/contants";

const NavLinks = ({ setIsNavActive }) => {
  return (
    <>
      {navLinkss.map((e) => {
        return (
          <a
            key={e.id}
            href={e.link}
            className="group inline-block mx-[1rem] text-[1.1rem] md:text-[1rem] lg:text-[1.3rem]  duration-300 hover:text-primary relative py-2"
            onClick={() => {
              setIsNavActive(false);
            }}
          >
            {e.name}
            <span className="absolute h-[2px] bg-primary bottom-0 left-0 w-full scale-x-0 group-hover:scale-x-100 duration-300 transition-transform rounded"></span>
          </a>
        );
      })}
    </>
  );
};

export default NavLinks;
