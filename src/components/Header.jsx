import React, { useContext } from "react";
import { SearchContext } from "../context/createContext";
import { useTranslation } from "react-i18next";
import i18n from "../locales/i18next";
export default function Header() {
  const { t } = useTranslation();
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const translateLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex  items-center gap-x-[100px]">
          <nav>
            <ul className="flex gap-x-[50px]">
              <li>
                <a href="">{t("Home")}</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Servise</a>
              </li>
            </ul>
          </nav>
          <input
            className="border-2 border-[#70C05B] w-[375px] p-[8px]"
            type="search"
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <select
            onChange={(e) => {
              translateLanguage(e.target.value);
            }}
            className="p-[10px] border-2 rounded-[5px]"
          >
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="en">En</option>
          </select>
        </div>
      </div>
    </header>
  );
}
