import React, { useEffect, useState, useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductInfo from "./ProductInfo";
import "./HomeStyle.css";

const SideBar = ({ camera, qrId, prodInfo }) => {
  const [productInfo, setProductInfo] = useState(null);
  const [productExist, setProductExist] = useState(false);
  const { getProductById } = useContext(ProductsContext);
  //   console.log(qrId);

  const productSetup = (prod) => {
    setProductInfo(prod);
    setProductExist(true);
  };

  useEffect(() => {
    const product = getProductById(qrId);
    // product.then((prod) => setProductInfo(prod));
    product.then((prod) => {
      prod.id ? productSetup(prod) : setProductExist(false);
    });
  }, [qrId]);

  return (
    <div className="sidebar">
      <section className="cameras">
        <h2>Cameras</h2>
        <ul>
          {camera ? (
            <li className="active">Integrated Camera</li>
          ) : (
            <li className="empty">No Cameras found</li>
          )}
        </ul>
      </section>
      <section className="scans">
        <h2>Scan</h2>
        <ul>
          {!qrId ? (
            <li className="empty">No Scan found</li>
          ) : productExist ? (
            <li className="scans-enter">{qrId}</li>
          ) : (
            <li className="incorrect">Incorrect QR code</li>
          )}
        </ul>
      </section>
      <section className="items">
        <h2>Product Information</h2>
        <ProductInfo productInfo={productInfo} />
      </section>
    </div>
  );
};

export default SideBar;
