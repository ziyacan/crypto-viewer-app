import React, { useLayoutEffect, useState, useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CryptoContext } from "./../context/CryptoContext";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 p-2 rounded-md">
        <p className="text-sm text-white">{`${label} : ${
          new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(payload[0].value) || 0
        }`}</p>
      </div>
    );
  }

  return null;
};

const ChartComponent = ({ data, currency, type }) => {
  return (
    <ResponsiveContainer height={"90%"}>
      <LineChart width={400} height={400} data={data}>
        <Line
          type="monotone"
          dataKey={type}
          stroke="#14ffec"
          strokeWidth={"1px"}
        />
        <CartesianGrid stroke="#323232" />
        <XAxis dataKey="date" hide />
        <YAxis dataKey={type} hide domain={["auto", "auto"]} />
        <Tooltip
          content={<CustomTooltip />}
          currency={currency}
          cursor={false}
          wrapperStyle={{ outline: "none" }}
        />
        <Legend
          verticalAlign="top"
          height={36}
          iconType="circle"
          iconSize={10}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

const Chart = ({ id }) => {
  const [chartData, setChartData] = useState();
  const { currency } = useContext(CryptoContext);
  const [type, setType] = useState("prices");
  const [days, setDays] = useState(7);

  useLayoutEffect(() => {
    const getChartData = async (id) => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Allow-Control-Allow-Origin": "*",
          },
        }
      );
      const data = await response.json();
      const formattedData = data[type].map((item) => {
        return {
          date: new Date(item[0]).toLocaleDateString(),
          [type]: item[1],
        };
      });
      setChartData(formattedData);
    };
    getChartData(id);
  }, [id, type, days]);

  return (
    <div className="w-full h-96">
      {chartData && (
        <ChartComponent data={chartData} currency={currency} type={type} />
      )}
      <div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <button
              onClick={() => setType("prices")}
              className={`${
                type === "prices" ? "bg-gray-800" : "bg-gray-700"
              } text-white p-1 rounded-md mr-2`}
            >
              Prices
            </button>
            <button
              onClick={() => setType("market_caps")}
              className={`${
                type === "market_caps" ? "bg-gray-800" : "bg-gray-700"
              } text-white p-1 rounded-md mr-2`}
            >
              Market Cap
            </button>
            <button
              onClick={() => setType("total_volumes")}
              className={`${
                type === "total_volumes" ? "bg-gray-800" : "bg-gray-700"
              } text-white p-1 rounded-md mr-2`}
            >
              Total Volume
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <button
              onClick={() => setDays(7)}
              className={`${
                days === 7 ? "bg-gray-800" : "bg-gray-700"
              } text-white p-1 rounded-md mr-2`}
            >
              7 Days
            </button>
            <button
              onClick={() => setDays(30)}
              className={`${
                days === 30 ? "bg-gray-800" : "bg-gray-700"
              } text-white p-1 rounded-md mr-2`}
            >
              30 Days
            </button>
            <button
              onClick={() => setDays(90)}
              className={`${
                days === 90 ? "bg-gray-800" : "bg-gray-700"
              } text-white p-1 rounded-md mr-2`}
            >
              90 Days
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
