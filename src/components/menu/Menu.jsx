import TitleSection from "../TitleSection";

import MenuList from "./MenuList";

const Menu = () => {
  return (
    <section
      className="text-slate-100 pt-[90px] pb-[50px] sm:pb-[60px] lg:pb-[80px] sm:pt-[100px]  lg:pt-[110px] "
      id="menu"
    >
      <TitleSection first="Menu" two="kami" />
      <p className="text-center text-sm font-light xl:text-base xl:max-w-[250px] max-w-[220px] mx-auto -mt-[15px] sm:-mt-[20px] md:-mt-[40px] lg:-mt-[55px]">
        Menu - menu yang tersedia di toko coklat Harmoni
      </p>
      <div className="mt-[40px] sm:mt-[60px] lg:mt-[70px] xl:mt-[80px] flex flex-wrap justify-center gap-[40px] lg:gap-[50px] px-[5%] lg:px-[6%] xl:px-[7%]">
        {<MenuList />}
      </div>
    </section>
  );
};

export default Menu;
