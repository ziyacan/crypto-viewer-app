import React from "react";
import { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";

const Sort = () => {
  const { setSort } = useContext(CryptoContext);

  const handleSortChange = (e) => {
    e.preventDefault();
    const val = e.target.value;
    setSort(val);
  };

  return (
    <div>
      <select name="sort" className="text-black" onChange={handleSortChange}>
        <option value="market_cap_desc">Market Cap Desc</option>
        <option value="market_cap_asc">Market Cap Asc</option>
        <option value="gecko_desc">Gecko Desc</option>
        <option value="gecko_asc">Gecko Asc</option>
        <option value="volume_desc">Volume Desc</option>
        <option value="volume_asc">Volume Asc</option>
        <option value="id_desc">Id Desc</option>
        <option value="id_asc">Id Asc</option>
      </select>
    </div>
  );
};

export default Sort;
