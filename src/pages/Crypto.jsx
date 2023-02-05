import React from "react";
import { Outlet } from "react-router-dom";
import Filters from "../components/Filters";
import Table from "../components/Table";

const Crypto = () => {
  return (
    <div>
      <Filters />
      <Table />
      <Outlet />
    </div>
  );
};

export default Crypto;
