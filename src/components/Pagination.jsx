import React, { useState } from "react";
import { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";
import { Button, Select } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const PerPage = () => {
  const { setPerPage } = useContext(CryptoContext);

  return (
    <div className="flex gap-4">
      <Button
        colorScheme="blue"
        variant="solid"
        onClick={() => {
          setPerPage(10);
        }}
      >
        10
      </Button>
      <Button
        colorScheme="blue"
        variant="solid"
        onClick={() => {
          setPerPage(25);
        }}
      >
        25
      </Button>
      <Button
        colorScheme="blue"
        variant="solid"
        onClick={() => {
          setPerPage(50);
        }}
      >
        50
      </Button>
      <Button
        colorScheme="blue"
        variant="solid"
        onClick={() => {
          setPerPage(100);
        }}
      >
        100
      </Button>

      <Select
        className="border rounded-4"
        onChange={(e) => {
          setPerPage(e.target.value);
        }}
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </Select>
    </div>
  );
};

const Pagination = () => {
  const { page, setPage, totalPages, perPage, cryptoData } =
    useContext(CryptoContext);

  // const totalNumber = Math.ceil(totalPages / 10); // 1000 tane var ise 100 sayfa olacak
  const totalNumber = Math.ceil(totalPages / perPage);
  // const totalNumber = 250;

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalNumber) {
      setPage(page + 1);
    }
  };

  const multiStepNext = () => {
    if (page + 3 >= totalNumber) {
      setPage(page - 1);
    } else {
      setPage(page + 3);
    }
  };

  const multiStepPrev = () => {
    if (page - 3 <= 1) {
      setPage(totalNumber + 1);
    } else {
      setPage(page - 2);
    }
  };

  if (cryptoData && cryptoData.length >= perPage) {
    return (
      <div className="justify-center w-full grid md:flex gap-4 md:justify-between">
        <PerPage />
        <div className="gap-2 flex">
          <Button colorScheme="blue" variant="solid" onClick={handlePrev}>
            <ChevronLeftIcon boxSize={8} />
          </Button>
          {page + 1 === totalNumber || page === totalNumber ? (
            <Button colorScheme="blue" variant="solid" onClick={multiStepPrev}>
              ...
            </Button>
          ) : null}
          {page - 1 !== 0 ? (
            <Button colorScheme="blue" variant="solid" onClick={handlePrev}>
              {page - 1}
            </Button>
          ) : null}
          <Button
            colorScheme="blue"
            variant="solid"
            disabled
            className="text-cyan"
          >
            {page}
          </Button>
          {page + 1 !== totalNumber && page !== totalNumber ? (
            <Button colorScheme="blue" variant="solid" onClick={handleNext}>
              {page + 1}
            </Button>
          ) : null}
          {page + 1 !== totalNumber && page !== totalNumber ? (
            <Button colorScheme="blue" variant="solid" onClick={multiStepNext}>
              ...
            </Button>
          ) : null}
          {page !== totalNumber ? (
            <Button
              colorScheme="blue"
              variant="solid"
              onClick={() => {
                setPage(totalNumber);
              }}
            >
              {totalNumber}
            </Button>
          ) : null}
          <Button colorScheme="blue" variant="solid" onClick={handleNext}>
            <ChevronRightIcon boxSize={8} />
          </Button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Pagination;
