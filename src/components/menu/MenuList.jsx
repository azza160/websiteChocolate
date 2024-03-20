import { menuCocholate } from "../../utils/contants";

function MenuList() {
  return (
    <>
      {menuCocholate.map((e, i) => {
        return (
          <div className="text-center" key={i}>
            <div className="flex justify-center">
              <img
                src={e.gambar}
                className="w-[260px] lg:w-[300px] h-[260px] lg:h-[300px] rounded-full shadow-md"
              ></img>
            </div>
            <h4 className="font-medium text-lg mt-4 mb-1">{e.nama} </h4>
            <p className="font-light">IDR {e.harga}K</p>
          </div>
        );
      })}
    </>
  );
}

export default MenuList;
