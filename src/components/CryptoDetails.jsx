import React, { useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { CryptoContext } from "../context/CryptoContext";
import { useContext } from "react";
import { useState } from "react";
import Chart from "./Chart";
import { ChevronDownIcon } from "@chakra-ui/icons";

const HighLowIndicator = ({ currentPrice, high, low }) => {
  const [green, setGreen] = useState();

  useEffect(() => {
    const total = high - low;
    const greenZone = ((high - currentPrice) * 100) / total;
    setGreen(Math.ceil(greenZone));
  }, [currentPrice, high, low]);

  return (
    <>
      <span
        className="bg-green h-2 rounded-l-lg w-1/2"
        style={{
          width: `${((currentPrice - low) / (high - low)) * 100}%`,
        }}
      ></span>
      <span
        className="bg-red h-2 rounded-r-lg w-1/2"
        style={{
          width: `${((high - currentPrice) / (high - low)) * 100}%`,
        }}
      ></span>
    </>
  );
};

const CryptoDetails = () => {
  const { coinId } = useParams();

  const {
    coinDetail: data,
    getCoinDetail,
    currency,
  } = useContext(CryptoContext);

  useLayoutEffect(() => {
    getCoinDetail(coinId);
  }, [coinId]);

  // return ReactDOM.createPortal(
  //   <div>CryptoDetails</div>,
  //   document.getElementById("modal")
  // );
  return (
    <>
      {data && (
        <div className="w-full gap-10 justify-center grid pt-10 md:flex md:justify-between">
          <div className="md:w-1/2 gap-10 grid">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <img
                  className="w-10 h-10"
                  src={data.image.large}
                  alt={data.name}
                />
                <h1 className="text-lg font-bold">{data.name}</h1>
                <span>({data.symbol})</span>
              </div>
            </div>
            <div className="items-center">
              <div className="flex justify-between">
                <h1 className="text-sm">Price</h1>
                <p
                  className={
                    data.market_data.price_change_percentage_24h > 0
                      ? "bg-green bg-opacity-50 px-1 rounded-md flex items-center text-sm"
                      : "bg-red bg-opacity-50 px-1 rounded-md flex items-center text-sm"
                  }
                >
                  {Number(data.market_data.price_change_percentage_24h).toFixed(
                    2
                  )}
                  %
                  <ChevronDownIcon
                    boxSize={4}
                    className={
                      data.market_data.price_change_percentage_24h > 0
                        ? "text-green rotate-180"
                        : "text-red rotate-0"
                    }
                  />
                </p>
              </div>
              <p className="text-lg font-bold">
                {new Intl.NumberFormat("en-US", {
                  maximumSignificantDigits: 5,
                  style: "currency",
                  currency: currency,
                }).format(
                  data.market_data.current_price[currency.toLowerCase()]
                )}
              </p>
            </div>
            <div>
              <div className="flex justify-between">
                <div>
                  <h1 className="text-sm">Market Cap</h1>
                  <p className="text-lg font-bold">
                    {new Intl.NumberFormat("en-US", {
                      minimumFractionDigits: 0,
                      notation: "compact",
                      style: "currency",
                      currency: currency,
                    }).format(
                      data.market_data.market_cap[currency.toLowerCase()]
                    )}
                  </p>
                </div>
                <div>
                  <h1 className="text-sm">Fully Diluted Valuation</h1>
                  <p className="text-lg font-bold">
                    {new Intl.NumberFormat("en-US", {
                      // maximumSignificantDigits: 5,
                      notation: "compact",
                      style: "currency",
                      currency: currency,
                    }).format(
                      data.market_data.fully_diluted_valuation[
                        currency.toLowerCase()
                      ]
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <div>
                  <h1 className="text-sm">Total Volume</h1>
                  <p className="text-lg font-bold">
                    {new Intl.NumberFormat("en-US", {
                      // maximumSignificantDigits: 5,
                      minimumFractionDigits: 0,
                      style: "currency",
                      currency: currency,
                    }).format(
                      data.market_data.total_volume[currency.toLowerCase()]
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <h1 className="text-sm">Circulating Supply</h1>
                <p className="text-lg font-bold">
                  {new Intl.NumberFormat("en-US", {
                    // maximumSignificantDigits: 5,
                    minimumFractionDigits: 0,
                    notation: "compact",
                  }).format(data.market_data.circulating_supply)}
                </p>
              </div>
              <div>
                <h1 className="text-sm">Total Supply</h1>
                <p className="text-lg font-bold">
                  {new Intl.NumberFormat("en-US", {
                    // maximumSignificantDigits: 5,
                    minimumFractionDigits: 0,
                    notation: "compact",
                  }).format(data.market_data.total_supply)}
                </p>
              </div>
            </div>
            <div className="flex">
              <HighLowIndicator
                currentPrice={
                  data.market_data.current_price[currency.toLowerCase()]
                }
                high={data.market_data.high_24h[currency.toLowerCase()]}
                low={data.market_data.low_24h[currency.toLowerCase()]}
              />
            </div>
            <div>
              <div className="flex justify-between">
                <div>
                  <h1 className="text-sm">Low 24H</h1>
                  <p className="text-lg font-bold">
                    {new Intl.NumberFormat("en-US", {
                      maximumSignificantDigits: 5,
                      style: "currency",
                      currency: currency,
                    }).format(data.market_data.low_24h[currency.toLowerCase()])}
                  </p>
                </div>
                <div>
                  <h1 className="text-sm">High 24H</h1>
                  <p className="text-lg font-bold">
                    {new Intl.NumberFormat("en-US", {
                      maximumSignificantDigits: 5,
                      style: "currency",
                      currency: currency,
                    }).format(
                      data.market_data.high_24h[currency.toLowerCase()]
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <Chart id={data.id} />
            <div className="w-full mt-20">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-sm">Market Cap Rank</h1>
                  <p className="text-lg font-bold">{data.market_cap_rank}</p>
                </div>
                <div>
                  <h1 className="text-sm">Coin Gecko Rank</h1>
                  <p className="text-lg font-bold">{data.coingecko_rank}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CryptoDetails;
