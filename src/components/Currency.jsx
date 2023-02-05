import React, { useRef } from "react";
import { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";

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
      <form onSubmit={handleCurrencyChange}>
        <input
          type="text"
          ref={currencyRef}
          name="currency"
          placeholder="Currency"
          className="border rounded-4 px-4 py-2 text-black"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-4"
        >
          Change Currency
        </button>
      </form>
    </div>
  );
};

export default Currency;
