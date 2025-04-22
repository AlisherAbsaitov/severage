import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { SearchContext } from "./context/createContext";
import Base from "./pages/Base";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import { useStore } from "./store/CreatZustand";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import Footer from "./components/Footer";
export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const login = useStore((state) => state.login);
  return (
    <React.Fragment>
      {login ? (
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />
          <Routes>
            <Route path="/" element={<Base />} />
            <Route path="/product" element={<Product />} />
          </Routes>
          <Footer/>
        </SearchContext.Provider>
      ) : (
        <SignUp />
      )}
    </React.Fragment>
  );
}
