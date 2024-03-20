/* eslint-disable react/prop-types */
function TitleSection({ first, two }) {
  return (
    <h1 className="text-center text-3xl font-bold sm:text-4xl lg:text-5xl mb-[30px] md:mb-[50px] lg:mb-[70px] text-primary">
      {first}
      <span className="text-slate-100"> {two}</span>
    </h1>
  );
}

export default TitleSection;
