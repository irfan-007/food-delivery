import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import ShowItem from "./components/ShowItem";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <div className="foods">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/show/:query" element={<ShowItem />} />
          <Route path="/restaurant/:id" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
