import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

const ProductInfo = (props) => {
  const { productInfo } = props;

  return (
    <div className="pd30">
      {productInfo?.id ? (
        <div>
          <p>
            <span>
              <b>Category: </b>
            </span>
            {productInfo.category}
          </p>
          <p>
            <span>
              <b>Halal: </b>
            </span>
            {productInfo.halal ? "yes" : "no"}
          </p>
          <p>
            <span>
              <b>Slaughter House Name: </b>
            </span>
            {productInfo.slaughterhouseName}
          </p>
          <p>
            <span>
              <b>Slaughter House Location: </b>
            </span>
            {productInfo.slaughterhouseLocation}
          </p>
          <p>
            <span>
              <b>Batch No: </b>
            </span>
            {productInfo.batchNo}
          </p>
          <p>
            <span>
              <b>Manufacture Date: </b>
            </span>
            {new Date(productInfo.timestamp).toLocaleDateString("en-UK")}
          </p>
          <p>
            <span>
              <b>Use Within Days: </b>
            </span>
            {productInfo.useWithinDays}
          </p>
        </div>
      ) : (
        <div className="empty">Please Scan the product</div>
      )}
    </div>
  );
};

export default ProductInfo;
