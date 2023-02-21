import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import CryptoDetails from "@/components/CryptoDetails";
import Trending from "../pages/trending";
import Saved from "../pages/saved";
import Crypto from "../pages/crypto";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Crypto />} />
        <Route path="/:coinId" element={<CryptoDetails />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/saved" element={<Saved />} />
      </Route>
    </Routes>
  );
};

export default Router;
