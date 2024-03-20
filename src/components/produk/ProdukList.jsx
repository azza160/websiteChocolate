/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { products } from "../../utils/contants";
import { FaEye } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import ProdukRating from "./ProdukRating";
import { useContext } from "react";
import { produkContext } from "../../App";

function ProdukList({ setIsModalActive }) {
  const { setDataCart, dataCart, handleCart } = useContext(produkContext);

  return (
    <>
      {products.map((e) => {
        return (
          <div
            key={e.id}
            className="border border-[#3e3e3e] p-3 rounded sm:py-5 sm:rounded-md"
          >
            <div className="flex justify-center items-center gap-3 mb-4">
              <span
                className="w-[33px] h-[33px] border border-[#3e3e3e] rounded-full inline-flex justify-center items-center cursor-pointer duration-300 hover:bg-primary"
                onClick={() => {
                  setIsModalActive((prev) => {
                    let newPrev = { ...prev, stat: true, dataId: e.id };
                    return newPrev;
                  });
                }}
              >
                <FaEye />
              </span>
              <span
                className="w-[33px] h-[33px] border border-[#3e3e3e] rounded-full inline-flex justify-center items-center cursor-pointer duration-300 hover:bg-primary"
                onClick={() => {
                  handleCart(e.id, e.nama, e.gambar, e.hargaDiskon);
                }}
              >
                <BsCart />
              </span>
            </div>
            <div>
              <img
                src={e.gambar}
                className="shadow-md rounded sm:rounded-md h-[300px] xs:h-[320px] sm:h-[370px] md:h-[320px] w-full xs:max-w-[365px] sm:max-w-[380px] md:object-cover xs:mx-auto object-fill"
              ></img>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-semibold mt-3 sm:mt-4 text-xl sm:text-2xl md:text-xl">
                {e.nama}
              </h3>
              <div className="flex gap-2 my-2 sm:my-3 sm:gap-3">
                {<ProdukRating jumlahBintang={e.bintang} />}
              </div>
              <p>
                IDR {e.hargaDiskon}K{" "}
                <span className="line-through font-light text-sm">
                  IDR {e.hargaReal}K
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProdukList;
