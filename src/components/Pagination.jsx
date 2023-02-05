import React, { useState } from "react";
import { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";

const PerPage = () => {
  const { setPerPage } = useContext(CryptoContext);

  return (
    <div className="flex gap-4">
      <button
        onClick={() => {
          setPerPage(10);
        }}
      >
        10
      </button>
      <button
        onClick={() => {
          setPerPage(25);
        }}
      >
        25
      </button>
      <button
        onClick={() => {
          setPerPage(50);
        }}
      >
        50
      </button>
      <button
        onClick={() => {
          setPerPage(100);
        }}
      >
        100
      </button>

      <select
        className="border rounded-4 text-black"
        onChange={(e) => {
          setPerPage(e.target.value);
        }}
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
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
      <div className="flex gap-4">
        <PerPage />
        <button onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        {page + 1 === totalNumber || page === totalNumber ? (
          <button onClick={multiStepPrev}>...</button>
        ) : null}
        {page - 1 !== 0 ? (
          <button onClick={handlePrev}>{page - 1}</button>
        ) : null}
        <button disabled className="text-cyan">
          {page}
        </button>
        {page + 1 !== totalNumber && page !== totalNumber ? (
          <button onClick={handleNext}>{page + 1}</button>
        ) : null}
        {page + 1 !== totalNumber && page !== totalNumber ? (
          <button onClick={multiStepNext}>...</button>
        ) : null}
        {page !== totalNumber ? (
          <button
            onClick={() => {
              setPage(totalNumber);
            }}
          >
            {totalNumber}
          </button>
        ) : null}
        <button onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default Pagination;
