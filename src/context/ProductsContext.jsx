import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import {
  contractABI,
  contractAddress,
  PRIVATE_KEY,
  API_KEY,
} from "../utils/constants";

export const ProductsContext = React.createContext();

const getEthereumContract = () => {
  //Provider
  const provider = new ethers.providers.AlchemyProvider("ropsten", API_KEY);

  //Signer
  const signer = new ethers.Wallet(PRIVATE_KEY, provider);

  //Contract
  const productsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return productsContract;
};

export const ProductsProvider = ({ children }) => {
  /*  const getAllProducts = async () => {
    try {
      const productsContract = getEthereumContract();
      const availableProducts = await productsContract.getAllProducts();

      console.log(availableProducts);
    } catch (error) {
      console.log(error);
    }
  }; */

  const getProductById = async (id) => {
    try {
      const productsContract = getEthereumContract();
      const prod = await productsContract.getProductById(id);

      const structuredProduct = {
        id: prod.id,
        category: prod.category,
        halal: prod.halal,
        slaughterhouseName: prod.slaughterhouseName,
        slaughterhouseLocation: prod.slaughterhouseLocation,
        timestamp: new Date(prod.timestamp.toNumber() * 1000).toLocaleString(),
        useWithinDays: parseInt(prod.useWithinDays),
        batchNo: parseInt(prod.batchNo._hex),
      };
      console.log(structuredProduct);
      return structuredProduct;
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   getProductById("8c61aa90-7dbb-11ec-8989-1d99c3d73c53");
  // }, []);
  return (
    <ProductsContext.Provider value={{ value: "test", getProductById }}>
      {children}
    </ProductsContext.Provider>
  );
};
