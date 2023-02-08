import React, { useRef } from "react";
import { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";
import { Button, Input } from "@chakra-ui/react";

const Currency = () => {
  const { setCurrency } = useContext(CryptoContext);
  const currencyRef = useRef();

  const handleCurrencyChange = (e) => {
    e.preventDefault();
    const val = currencyRef.current.value;
    setCurrency(val);
    currencyRef.current.value = "";
  };

  return (
    <div>
      <form className="flex gap-4" onSubmit={handleCurrencyChange}>
        <div>
          <Input
            type="text"
            ref={currencyRef}
            name="currency"
            placeholder="USD, EUR, TRY, etc."
          />
        </div>
        <div>
          <Button type="submit" colorScheme="blue" variant="solid">
            Change
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Currency;
