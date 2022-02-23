import { useState, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import QrScanBox from "./components/QrScanBox";
import "./App.css";

import { ProductsContext } from "./context/ProductsContext";

function App() {
  const { value } = useContext(ProductsContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/qr-scan" element={<QrScanBox />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
