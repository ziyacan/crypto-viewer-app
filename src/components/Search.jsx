import debounce from "lodash.debounce";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";
import { Button, Input } from "@chakra-ui/react";

const SearchInput = ({ handleSearch }) => {
  const [search, setSearch] = useState("");
  const { searchData, setCoinSearch, setSearchData } =
    useContext(CryptoContext);

  const handleChange = (e) => {
    e.preventDefault();
    const query = e.target.value;
    setSearch(query);
    handleSearch(query);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search);
  };

  const selectCoin = (coin) => {
    setCoinSearch(coin);
    setSearch("");
    setSearchData();
  };

  return (
    <div>
      <form className="flex items-center gap-4" onSubmit={handleSubmit}>
        <div>
          <Input
            onChange={handleChange}
            value={search}
            className="border rounded-4 py-2 px-4"
            type="text"
            placeholder="Search"
          />
        </div>
        <div>
          <Button
            colorScheme="blue"
            variant="solid"
            type="submit"
            paddingLeft={6}
          >
            Search
          </Button>
        </div>
      </form>

      {search.length > 0 ? (
        <div
          className="wrapper absolute flex items-center justify-center top-auto w-96 h-96 rounded
        overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 z-10
        backdrop-blur-md scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-200"
        >
          <ul className="w-full h-96">
            {searchData ? (
              searchData.map((coin) => (
                <li
                  key={coin.id}
                  onClick={() => selectCoin(coin.id)}
                  className="flex gap-4 p-4 hover:bg-gray-100/10 cursor-pointer"
                >
                  <img src={coin.thumb} alt={coin.name} />
                  <span>{coin.name}</span>
                </li>
              ))
            ) : (
              <div className="w-full h-full flex justify-center items-center">
                <div
                  className="w-8 h-8 rounded-full border border-cyan border-b-gray-200 animate-spin"
                  role="status"
                />
                <span className="ml-2">Searching...</span>
              </div>
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

const Search = () => {
  const { getSearchData } = useContext(CryptoContext);

  const debounceFunction = debounce((val) => {
    getSearchData(val);
  }, 1000);

  return <SearchInput handleSearch={debounceFunction} />;
};

export default Search;
