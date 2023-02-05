import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CryptoContext } from "../context/CryptoContext";
import Pagination from "./Pagination";

const Table = () => {
  const { cryptoData, currency } = useContext(CryptoContext);
  return (
    <div>
      {cryptoData ? (
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Symbol</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Total Volume</th>
              <th className="px-4 py-2">Market Cap Change</th>
              <th className="px-4 py-2">1H</th>
              <th className="px-4 py-2">7D</th>
              <th className="px-4 py-2">24H</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData.map((coin) => (
              <tr key={coin.id}>
                <td className="border gap-2 px-4 py-2">
                  <Link to={`/${coin.id}`}>{coin.name}</Link>
                </td>
                <td className="border px-4 py-2 flex gap-2">
                  <Link to={`/${coin.id}`}>
                    <img className="w-6 h-6" src={coin.image} alt={coin.name} />
                  </Link>
                  <span className="uppercase">
                    <Link to={`/${coin.id}`}>{coin.symbol}</Link>
                  </span>
                </td>
                <td className="border px-4 py-2">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: currency,
                  }).format(coin.current_price)}
                </td>
                <td className="border px-4 py-2">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: currency,
                  }).format(coin.total_volume)}
                </td>
                <td
                  className={
                    coin.market_cap_change_percentage_24h > 0
                      ? "border text-center px-4 py-2 text-green"
                      : "border text-center px-4 py-2 text-red"
                  }
                >
                  {Number(coin.market_cap_change_percentage_24h).toFixed(2)}
                </td>
                <td
                  className={
                    coin.price_change_percentage_1h_in_currency > 0
                      ? "border text-center px-4 py-2 text-green"
                      : "border text-center px-4 py-2 text-red"
                  }
                >
                  {Number(coin.price_change_percentage_1h_in_currency).toFixed(
                    2
                  )}
                </td>
                <td
                  className={
                    coin.price_change_percentage_7d_in_currency > 0
                      ? "border text-center px-4 py-2 text-green"
                      : "border text-center px-4 py-2 text-red"
                  }
                >
                  {Number(coin.price_change_percentage_7d_in_currency).toFixed(
                    2
                  )}
                </td>
                <td
                  className={
                    coin.price_change_percentage_24h_in_currency > 0
                      ? "border text-center px-4 py-2 text-green"
                      : "border text-center px-4 py-2 text-red"
                  }
                >
                  {Number(coin.price_change_percentage_24h_in_currency).toFixed(
                    2
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
      <div className="flex items-center justify-between mt-4 capitalize h-[2rem]">
        <span>
          Data provided by{" "}
          <a
            className="text-cyan"
            href="http://www.coingecko.com"
            rel="noreferrer"
            target={"_blank"}
          >
            CoinGecko
          </a>
        </span>
        <Pagination />
      </div>
    </div>
  );
};

export default Table;
