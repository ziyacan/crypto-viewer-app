import React, { createContext, useLayoutEffect, useState } from "react";

export const TrendingContext = createContext({});

export const TrendingProvider = ({ children }) => {
  const [trendingData, setTrendingData] = useState("");

  const getTrendingData = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/search/trending`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Allow-Control-Allow-Origin": "*",
        },
      }
    );
    const data = await response.json();
    setTrendingData(data.coins);
  };

  useLayoutEffect(() => {
    getTrendingData();
  }, []);

  return (
    <TrendingContext.Provider
      value={{
        trendingData,
        getTrendingData,
      }}
    >
      {children}
    </TrendingContext.Provider>
  );
};
