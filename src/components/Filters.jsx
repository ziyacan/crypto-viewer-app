import React from "react";
import Search from "./Search";
import Currency from "./Currency";
import Sort from "./Sort";
import { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";

const Filters = () => {
  const { resetList } = useContext(CryptoContext);
  return (
    <div className="flex justify-between border rounded-4 items-center py-4">
      <Search />
      <Currency />
      <Sort />
      <div>
        <button onClick={resetList}>Reset</button>
      </div>
    </div>
  );
};

export default Filters;
