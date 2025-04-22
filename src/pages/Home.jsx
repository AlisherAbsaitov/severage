import React, { useContext, useState } from "react";
import cardimg from "/public/cardone.png";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import productJson from "../data/products.json";
import { SearchContext } from "../context/createContext";
import { useStore } from "../store/CreatZustand";
import { Link } from "react-router-dom";
export default function Home() {
  const [data, setData] = useState(productJson);

  const { searchValue, setSearchValue } = useContext(SearchContext);
  const setProduct = useStore((state) => state.setProduct);

  const draveData = (value) => {
    let res = value.filter((val) => {
      if (searchValue.length == 0) {
        return value;
      } else {
        if (
          val.product_desc
            .toLowerCase()
            .includes(searchValue.trim().toLowerCase())
        ) {
          return val;
        }
      }
    });

    return res.map((val, index) => {
      return (
        <li
          key={index}
          className="w-[272px] rounded-[4px] shadow-md flex flex-col items-center p-[5px] relative"
        >
          <Link to={`/product`} onClick={() => setProduct(val)}>
            <img
              src={val.product_img}
              alt="Г/Ц Блинчики с мясом вес, Россия"
              width={226}
              height={160}
            />
            <CiHeart className="absolute top-[8px] right-2 text-[25px]  " />
            <span className="absolute top-[118px] left-[10px] px-[8px] py-[4px] bg-[#FF6633] rounded-[4px] text-[16px] leading-[24px] text-white">
              {val.product_skidka}
            </span>
            <div className="flex flex-col gap-y-[8px] w-full">
              <div className="flex justify-between w-full">
                <div>
                  <ins className="text-[18px] font-extrabold leading-[27px] no-underline">
                    {val.product_plastik}
                  </ins>
                  <p className="text-[12px] font-normal leading-[18px]">
                    С картой
                  </p>
                </div>
                <div>
                  <ins className="text-[18px] font-normal leading-[27px] no-underline">
                    {val.product_money}
                  </ins>
                  <p className="text-[12px] font-normal leading-[18px]">
                    Обычная
                  </p>
                </div>
              </div>
              <p className="text-[16px] leading-[24px] font-normal h-[48px] overflow-hidden">
                {val.product_desc}
              </p>
              <div className="flex gap-x-[4px]">
                {val.start.map((value, index) => {
                  return value ? (
                    <FaStar
                      key={index}
                      className="text-[24px] text-orange-500"
                    />
                  ) : (
                    <FaStar
                      key={index}
                      className="text-[24px] text-[#BFBFBF]"
                    />
                  );
                })}
              </div>
              <button className="w-full p-[8px] border-2 border-[#70C05B] text-[#70C05B] rounded-[4px]">
                В корзину
              </button>
            </div>
          </Link>
        </li>
      );
    });
  };

  return (
    <section>
      <div className="container mx-auto">
        {data.map((value, index) => {
          return (
            <div key={index}>
              <h3 className="text-[40px]">{value.title}</h3>
              <ul className="flex justify-between">{draveData(value.infos)}</ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
