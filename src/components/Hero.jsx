import heroimg from "../assets/hero2.jpg";

const Hero = () => {
  return (
    <section
      className="text-slate-50 min-h-screen flex items-center bg-cover bg-left relative"
      id="home"
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      <main className="px-[5%] lg:px-[6%] xl:px-[7%] max-w-[60rem] flex flex-col md:-mt-[40px] lg:mt-0">
        <h3 className="font-semibold text-primary sm:text-lg md:text-xl lg:text-2xl">
          <span className="text-primary">coklat</span> harmoni
        </h3>
        <h2 className="font-bold text-2xl mt-2 lg:mt-3 xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xs:max-w-[450px] md:max-w-[710px] mix-blend-difference">
          Coklat kreatif,inspirasi dan inovasi{" "}
          <span className="text-primary">dalam setiap gigitan!</span>
        </h2>
        <p className="text-base font-light my-5 xs:max-w-[450px] md:max-w-[720px] sm:my-5 mix-blend-difference">
          Selamat datang di Toko Coklat kami, di mana Anda akan menemukan
          kelezatan coklat terbaik yang membuat selera tergoda.
        </p>
        <a className="inline-block bg-primary text-white py-2 lg:py-3 lg:text-lg w-[180px] text-center rounded shadow">
          beli sekarang
        </a>
      </main>
      <span
        className="absolute block w-full h-[30%]  bottom-0"
        id="sudo-home"
      ></span>
    </section>
  );
};

export default Hero;
