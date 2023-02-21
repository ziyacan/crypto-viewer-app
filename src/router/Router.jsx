import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import CryptoDetails from "@/components/CryptoDetails";
import Saved from "@/pages/saved";
import Crypto from "@/pages/crypto";
import TrendingCoins from './../components/TrendingCoins';

const Router = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Crypto />} />
        <Route path="/:coinId" element={<CryptoDetails />} />
        <Route path="/trending" element={<TrendingCoins />} />
        <Route path="/saved" element={<Saved />} />
      </Route>
    </Routes>
  );
};

export default Router;
