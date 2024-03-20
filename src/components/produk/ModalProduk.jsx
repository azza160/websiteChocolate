/* eslint-disable react/prop-types */
import produk1 from "../../assets/product1.jpg";
import { FaRegStar } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { products } from "../../utils/contants";

function ModalProduk({ isModalActive, setIsModalActive }) {
  let data;
  let jumlahRating = [];
  if (isModalActive.stat) {
    data = products.filter((e) => {
      return e.id == isModalActive.dataId;
    })[0];
    for (let index = 0; index < data.bintang; index++) {
      jumlahRating.push(<FaRegStar />);
    }
  }

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 bg-black ${
        isModalActive.stat ? "block" : "hidden"
      } bg-opacity-90 z-[9999999999] flex items-center justify-center px-5 duration-300`}
    >
      <div
        className="bg-white relative rounded sm:rounded-md xs:max-w-[370px] sm:max-w-full md:max-w-[1000px] overflow-y-auto sm:p-5"
        id="myModal"
      >
        <div className="flex flex-col sm:flex-row sm:gap-3">
          <div>
            <img
              src={isModalActive.stat ? data.gambar : produk1}
              className="h-[250px] xs:h-[260px] sm:max-w-[350px] object-cover w-full rounded sm:rounded-md"
            ></img>
          </div>
          <div className="py-5 sm:py-6 px-2 sm:w-[50%]">
            <h2 className="text-xl font-bold mb-2 sm:text-2xl md:text-3xl">
              {isModalActive.stat ? data.nama : "chocolate"}
            </h2>
            <p className="text-sm mb-2 text-[15px] md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              corporis quis veritatis sunt assumenda quaerat?
            </p>
            <div className="flex gap-2 mb-1 sm:mb-2 md:mb-3">
              {jumlahRating.length > 0 ? (
                jumlahRating.map((e, i) => {
                  return (
                    <span key={i} className="text-lg">
                      {e}
                    </span>
                  );
                })
              ) : (
                <FaRegStar />
              )}
            </div>
            <p className="text-sm mb-2 md:text-base font-medium">
              IDR {isModalActive.stat ? data.hargaDiskon : "50"}K{" "}
              <span className="font-ligt text-sm line-through">
                {isModalActive.stat ? data.hargaReal : "20"}K
              </span>
            </p>
            <button className="inline-flex items-center gap-1 bg-primary w-[150px] py-2 rounded text-slate-100 justify-center shadow">
              <BsCart />
              simpan
            </button>
          </div>
          <IoClose
            className="absolute top-2 right-2 bg-black text-white w-[25px] h-[25px] inline-flex justify-center items-center rounded shadow-lg cursor-pointer"
            onClick={() => {
              setIsModalActive((prev) => {
                let newPrev = { ...prev, stat: false };
                return newPrev;
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ModalProduk;
