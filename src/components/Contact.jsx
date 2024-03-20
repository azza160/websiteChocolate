/* eslint-disable react/no-unknown-property */
import TitleSection from "./TitleSection";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="text-slate-100 pt-[90px] pb-[50px] sm:pb-[60px] lg:pb-[80px] sm:pt-[100px]  lg:pt-[110px] px-[5%] lg:px-[6%] xl:px-[7%]"
    >
      <TitleSection first="Kontak" two="kami" />
      <p className="text-center text-sm font-light max-w-[220px] xl:text-base xl:max-w-[250px] mx-auto -mt-[15px] sm:-mt-[20px] md:-mt-[40px] lg:-mt-[55px]">
        Contact dan alamat dari toko coklat Harmoni
      </p>
      <div className="bg-[#222] w-full flex flex-col gap-8 lg:gap-10 px-3 sm:px-5 lg:px-8 lg:py-6 py-5 rounded mt-[50px] md:flex-row md:items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.60965018193!2d107.5607556805953!3d-6.903271953467887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68dd8b43fb4d7d%3A0x401e8f1fc28c730!2sCimenyan!5e0!3m2!1sid!2sid!4v1710320399957!5m2!1sid!2sid"
          allowFullScreen=""
          loading="lazy"
          className="w-full rounded h-[200px] sm:h-[250px] md:h-[350px] md:w-[50%] md:rounded-e-none lg:h-[450px] xl:h-[550px]"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <form className="flex flex-col gap-3 sm:gap-5 lg:gap-7 xl:gap-8 w-full md:w-[50%]">
          <div className="flex bg-bg py-3 md:py-4 lg:py-5 xl:py-6 border border-slate-100 rounded items-center gap-3 md:gap-4 px-3 lg:px-5">
            <FaRegUser className=" md:text-lg lg:text-xl xl:text-2xl" />
            <input
              type="text"
              placeholder="masukan nama..."
              className="bg-transparent w-full focus:outline-none"
            ></input>
          </div>
          <div className="flex bg-bg py-3 md:py-4 lg:py-5 xl:py-6  border border-slate-100 rounded items-center gap-2 md:gap-4 px-3 lg:px-5">
            <MdOutlineEmail className=" md:text-lg lg:text-xl xl:text-2xl" />
            <input
              type="text"
              placeholder="masukan email..."
              className="bg-transparent w-full focus:outline-none"
            ></input>
          </div>
          <div className="flex bg-bg py-3 md:py-4 lg:py-5 xl:py-6  border border-slate-100 rounded items-center gap-2 md:gap-4 px-3 lg:px-5">
            <FiPhone className=" md:text-lg lg:text-xl xl:text-2xl" />
            <input
              type="number"
              placeholder="masukan nomor..."
              className="bg-transparent w-full focus:outline-none"
            ></input>
          </div>
          <button className="bg-primary w-full h-[50px] md:h-[58px] lg:h-[66px] font-medium text-lg rounded text-center">
            kirim
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
