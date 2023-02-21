import React from "react";
import { Outlet } from "react-router-dom";
import TrendingCoins from "../components/TrendingCoins";

const Trending = () => {
  return (
    <div>
      <TrendingCoins />
    </div>
  );
};

export default Trending;
