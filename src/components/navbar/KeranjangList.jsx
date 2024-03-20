import { useContext } from "react";
import { BsTrash } from "react-icons/bs";
import { produkContext } from "../../App";

function KeranjangList() {
  const { dataCart } = useContext(produkContext);

  return (
    <>
      {dataCart.map((e) => {
        return (
          <div
            key={e.id}
            className="flex flex-col md:flex-row md:items-center border-b border-b-bg pt-5 pb-3"
          >
            <div className="mr-5">
              <img
                src={e.gambar}
                className="w-full rounded shadow h-[240px] sm:h-[270px] md:w-[195px] md:shadow-md md:h-[140px] md:object-cover md:rounded-full"
              ></img>
            </div>
            <div className="flex justify-between items-center mt-3 md:mt-0 w-full">
              <div className="">
                <h3 className="text-lg font-semibold sm:text-xl sm:font-bold mb-1">
                  {e.nama}
                </h3>
                <p className="font-light text-sm">IDR {e.hargaDiskon}K</p>
                <p className="font-light text-sm">{e.jumlah} buah</p>
              </div>
              <BsTrash className="text-xl text-primary cursor-pointer duration-300 hover:scale-110" />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default KeranjangList;
