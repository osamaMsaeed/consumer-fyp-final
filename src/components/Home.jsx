import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import ProductInfo from "./ProductInfo";
import SideBar from "./SideBar";
import "./HomeStyle.css";

const Home = (props) => {
  const { getProductById } = useContext(ProductsContext);
  const [productInfo, setProductInfo] = useState(null);
  let location = useLocation();

  // useEffect(() => {
  //   console.log(location.state);
  //   if (location.state) {
  //     const product = getProductById(location.state.qrId);
  //     product.then((prod) => setProductInfo(prod));
  //     // setProductInfo(product);
  //   }
  // }, []);

  return (
    <>
      {location?.state?.qrId ? (
        <SideBar camera={true} qrId={location.state.qrId} />
      ) : (
        <SideBar camera={false} />
      )}
      <Link className="HomeQRLink" to="/qr-scan">
        <button className="HomeQRButton">Scan QR code</button>
      </Link>
      {/* <ProductInfo productInfo={productInfo} /> */}
    </>
  );
};

export default Home;
