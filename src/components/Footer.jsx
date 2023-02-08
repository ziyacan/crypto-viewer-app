import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex items-center justify-center p-10 mt-4 capitalize h-[2rem]">
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
      </div>
    </div>
  );
};

export default Footer;
