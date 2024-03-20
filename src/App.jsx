import { createContext, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/Hero";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Produk from "./components/produk/Produk";

export const produkContext = createContext();

function App() {
  //state untuk mengelola data yang akan tampil di cart
  const [dataCart, setDataCart] = useState([]);
  const handleCart = (id, nama, gambar, harga) => {
    setDataCart(() => {
      const existingProductIndex = dataCart.findIndex((item) => item.id === id);

      if (existingProductIndex !== -1) {
        // Jika produk sudah ada di dalam keranjang, tambahkan 1 pada jumlahnya
        const newPrev = [...dataCart];
        alert("produk sudah ada di keranjang");
        return newPrev;
      } else {
        // Jika produk belum ada di dalam keranjang, tambahkan produk baru dengan jumlah 1
        alert("produk sudah ditambahkan ke keranjang");
        return [
          ...dataCart,
          {
            id: id,
            nama: nama,
            gambar: gambar,
            hargaDiskon: harga,
            jumlah: 1,
          },
        ];
      }
    });
  };

  return (
    <produkContext.Provider value={{ dataCart, setDataCart, handleCart }}>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Produk />
      <Contact />
      <Footer />
    </produkContext.Provider>
  );
}

export default App;
