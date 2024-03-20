import TitleSection from "./TitleSection";
import aboutImg from "../assets/about.jpg";

function About() {
  return (
    <section
      className="text-slate-100 pt-[90px] pb-[50px] sm:pb-[60px] lg:pb-[80px] sm:pt-[100px]  lg:pt-[110px]"
      id="about"
    >
      <TitleSection first="Tentang" two="kami" />
      <div className="px-[5%] lg:px-[6%] xl:px-[7%] flex flex-col md:flex-row md:gap-[30px] xl:mt-[100px]">
        <div className="md:w-[50%] lg:w-[45%]">
          <img
            src={aboutImg}
            className="w-full rounded-md xl:rounded-lg shadow-md"
          ></img>
        </div>
        <div className="mt-5 md:mt-0 md:w-[50%] lg:w-[55%]">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
            kenapa memilih coklat kami?
          </h2>
          <p className="my-4 lg:my-6 xl:my-7 text-sm xl:text-base font-light">
            Pilih coklat kami karena kami berkomitmen pada kualitas dan keunikan
            rasa. Setiap gigitan memancarkan kelezatan yang khas dan menggoda
            selera.
          </p>
          <p className="my-3 text-sm font-light xl:text-base">
            Selain itu, kami mengutamakan kreativitas dalam setiap kreasi kami.
            Dengan inovasi terus-menerus, kami memberikan pengalaman coklat yang
            tak terlupakan bagi setiap pelanggan kami.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
