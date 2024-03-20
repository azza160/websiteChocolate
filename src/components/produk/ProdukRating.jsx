/* eslint-disable react/prop-types */
import { FaRegStar } from "react-icons/fa";

function ProdukRating({ jumlahBintang }) {
  const bintangArr = [];
  for (let index = 0; index < jumlahBintang; index++) {
    bintangArr.push(index);
  }

  return (
    <>
      {bintangArr.map((e, i) => {
        return <FaRegStar key={i} className="text-lg sm:text-xl font-medium" />;
      })}
    </>
  );
}

export default ProdukRating;
