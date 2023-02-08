import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TrendingContext } from "../context/TrendingContext";

const TrendingCoins = () => {
  const { trendingData } = useContext(TrendingContext);

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div>
      {trendingData &&
        trendingData.map((coin, index) => {
          return (
            <div
              className="flex items-center p-4 gap-10 cursor-pointer transition-all hover:bg-[#1b427a]"
              key={index}
              onClick={() => handleClick(coin.item.id)}
            >
              <div>
                <img
                  className="w-16 h-16"
                  src={coin.item.large}
                  alt={coin.item.name}
                />
              </div>
              <div>
                <div className="flex gap-4">
                  <p>{coin.item.name}</p>
                  <p>{coin.item.symbol}</p>
                </div>
                <div className="flex gap-2">
                  <p>Score :</p>
                  <p>{coin.item.score}</p>
                </div>
                <div className="flex gap-2">
                  <p>Price in BTC :</p>
                  <p>{Number.parseFloat(coin.item.price_btc).toFixed(8)}</p>
                </div>
                <div className="flex gap-2">
                  <p>Market Cap Rank: </p>
                  <p>{coin.item.market_cap_rank}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TrendingCoins;
