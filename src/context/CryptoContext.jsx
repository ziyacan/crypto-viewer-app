import React, { createContext, useLayoutEffect, useState } from "react";

export const CryptoContext = createContext({});

export const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState("");
  const [searchData, setSearchData] = useState("");
  const [coinSearch, setCoinSearch] = useState("");
  const [currency, setCurrency] = useState("usd");
  const [sort, setSort] = useState("market_cap_desc");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(250);
  const [perPage, setPerPage] = useState(10);
  const [coinDetail, setCoinDetail] = useState("");

  const getCoinData = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sort}&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Allow-Control-Allow-Origin": "*",
        },
      }
    );
    const data = await response.json();
    setCryptoData(data);
  };

  const getCoinDetail = async (coinId) => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false
      `,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Allow-Control-Allow-Origin": "*",
        },
      }
    );
    const data = await response.json();
    setCoinDetail(data);
  };

  const getAllCoinsList = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/list`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Allow-Control-Allow-Origin": "*",
        },
      }
    );
    const data = await response.json();
    setTotalPages(data.length);
  };

  const getSearchData = async (query) => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/search/?query=${query}`
    );
    const data = await response.json();
    setSearchData(data.coins);
  };

  const resetList = () => {
    setPage(1);
    setCoinSearch("");
    setCurrency("usd");
  };

  useLayoutEffect(() => {
    getCoinData();
    // getAllCoinsList();
  }, [coinSearch, currency, sort, page, perPage]);

  return (
    <CryptoContext.Provider
      value={{
        cryptoData,
        searchData,
        currency,
        sort,
        page,
        totalPages,
        perPage,
        coinDetail,
        getSearchData,
        setCoinSearch,
        setSearchData,
        setCurrency,
        setSort,
        setPage,
        resetList,
        setPerPage,
        getCoinDetail,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};
