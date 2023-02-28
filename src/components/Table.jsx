import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CryptoContext } from "../context/CryptoContext";
import Pagination from "./Pagination";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const CoinListTable = () => {
    const { cryptoData, currency } = useContext(CryptoContext);
    return (
        <div>
            {cryptoData ? (
                <TableContainer>
                    <Table variant="mytable" colorScheme="blue">
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Symbol</Th>
                                <Th>Price</Th>
                                <Th>Total Volume</Th>
                                <Th>Market Cap Change</Th>
                                <Th>1H</Th>
                                <Th>7D</Th>
                                <Th>24H</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {cryptoData.map((coin) => (
                                <Tr key={coin.id}>
                                    <Td className="border gap-2 px-4 py-2">
                                        <Link to={`/${coin.id}`}>
                                            {coin.name}
                                        </Link>
                                    </Td>
                                    <Td className="flex border gap-2">
                                        <Link to={`/${coin.id}`}>
                                            <img
                                                className="w-6 h-6 mr-6"
                                                src={coin.image}
                                                alt={coin.name}
                                            />
                                        </Link>
                                        <div className="uppercase">
                                            <Link to={`/${coin.id}`}>
                                                {coin.symbol}
                                            </Link>
                                        </div>
                                    </Td>
                                    <Td className="border px-4 py-2">
                                        {new Intl.NumberFormat("en-US", {
                                            style: "currency",
                                            currency: currency,
                                        }).format(coin.current_price)}
                                    </Td>
                                    <Td className="border text-center px-4 py-2">
                                        {new Intl.NumberFormat("en-US", {
                                            style: "currency",
                                            currency: currency,
                                        }).format(coin.total_volume)}
                                    </Td>
                                    <Td
                                        className={
                                            coin.market_cap_change_percentage_24h >
                                            0
                                                ? "border !text-center px-4 py-2 text-green"
                                                : "border !text-center px-4 py-2 text-red"
                                        }
                                    >
                                        {Number(
                                            coin.market_cap_change_percentage_24h
                                        ).toFixed(2)}
                                    </Td>
                                    <Td
                                        className={
                                            coin.price_change_percentage_1h_in_currency >
                                            0
                                                ? "border text-center px-4 py-2 text-green"
                                                : "border text-center px-4 py-2 text-red"
                                        }
                                    >
                                        {Number(
                                            coin.price_change_percentage_1h_in_currency
                                        ).toFixed(2)}
                                    </Td>
                                    <Td
                                        className={
                                            coin.price_change_percentage_7d_in_currency >
                                            0
                                                ? "border text-center px-4 py-2 text-green"
                                                : "border text-center px-4 py-2 text-red"
                                        }
                                    >
                                        {Number(
                                            coin.price_change_percentage_7d_in_currency
                                        ).toFixed(2)}
                                    </Td>
                                    <Td
                                        className={
                                            coin.price_change_percentage_24h_in_currency >
                                            0
                                                ? "border text-center px-4 py-2 text-green"
                                                : "border text-center px-4 py-2 text-red"
                                        }
                                    >
                                        {Number(
                                            coin.price_change_percentage_24h_in_currency
                                        ).toFixed(2)}
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            ) : (
                // <div className="p-20 flex gap-2 justify-center">
                //     <Spinner />
                //     <p className="font-bold">Loading...</p>
                // </div>
                <SkeletonTheme baseColor="#90CDF4" highlightColor="#1A202C">
                    <p>
                        <Skeleton count={10} />
                    </p>
                </SkeletonTheme>
            )}
            <div className="flex items-center justify-between mt-4 capitalize">
                <Pagination />
            </div>
        </div>
    );
};

export default CoinListTable;
