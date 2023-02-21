import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import CryptoDetails from "@/components/CryptoDetails";
import Crypto from "@/pages/Crypto";
import TrendingCoins from "./../components/TrendingCoins";

const Router = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Crypto />} />
        <Route path="/:coinId" element={<CryptoDetails />} />
        <Route path="/trending" element={<TrendingCoins />} />
      </Route>
    </Routes>
  );
};

export default Router;
