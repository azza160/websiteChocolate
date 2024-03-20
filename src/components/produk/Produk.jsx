/* eslint-disable no-unused-vars */
import { useState } from "react";
import TitleSection from "../TitleSection";
import ModalProduk from "./ModalProduk";
import ProdukList from "./ProdukList";

function Produk() {
  //state untuk mengelola modal produk
  const [isModalActive, setIsModalActive] = useState({
    stat: false,
    dataId: 0,
  });

  return (
    <>
      <section
        className="pt-[90px] pb-[50px] sm:pb-[60px] lg:pb-[80px] sm:pt-[100px] lg:pt-[110px] text-slate-100"
        id="produk"
      >
        <TitleSection first="Produk " two="kami" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-[5%] lg:px-[6%] xl:px-[7%]">
          <ProdukList setIsModalActive={setIsModalActive} />
        </div>
      </section>
      <ModalProduk
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
      />
    </>
  );
}

export default Produk;
