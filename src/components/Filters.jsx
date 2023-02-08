import React from "react";
import Search from "./Search";
import Currency from "./Currency";
import Sort from "./Sort";
import { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";
import { Button } from "@chakra-ui/react";

const Filters = () => {
  const { resetList } = useContext(CryptoContext);
  return (
    <div className="md:flex justify-between border-b rounded-8 items-center py-4">
      <div className="gap-2 grid">
        <Search />
        <Currency />
      </div>
      <div className="gap-2 grid mt-4 md:mt-0">
        <Sort />
        <Button colorScheme="blue" variant="outline" onClick={resetList}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Filters;
