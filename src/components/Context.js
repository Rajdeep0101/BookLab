import React, { useState, createContext } from "react";
export const InputContext = createContext();

function Context(props) {
  const [searchVal, setSearchVal] = useState("time");
  const [maxEntries, setMaxEntries] = useState(12);
  const [filterModal, setFilterModal] = useState(false);
  const [page, setPage] = useState(1);
  const [books, setBooks] = useState({
    item: [],
    totalItem: 1,
  });
  const [filterparams, setFilterparams] = useState({
    price: {
      free: true,
      paid: true,
    },
    printtype: {
      books: true,
      magazines: false,
    },
    orderby: "relevance",
  });

  const [isChecked, setIsChecked] = useState({
    price: {
      free: true,
      paid: true,
    },
    printtype: {
      books: true,
      magazines: false,
    },
    orderby: "relevance",
  });

  const filterprice = () => {
    if (filterparams.price.free && filterparams.price.paid) {
      return "";
    } else if (filterparams.price.free && !filterparams.price.paid) {
      return "&filter=free-ebooks";
    } else if (!filterparams.price.free && filterparams.price.paid) {
      return "&filter=paid-ebooks";
    } else {
      return "";
    }
  };

  const filterprinttype = () => {
    if (filterparams.printtype.books && filterparams.printtype.magazines) {
      return "&printType=all";
    } else if (
      filterparams.printtype.books &&
      !filterparams.printtype.magazines
    ) {
      return "&printType=books";
    } else if (
      !filterparams.printtype.books &&
      filterparams.printtype.magazines
    ) {
      return "&printType=magazines";
    } else {
      return "";
    }
  };
  const orderby = () => {
    if (filterparams.orderby === "relevance") {
      return "&orderBy=relevance";
    } else if (filterparams.orderby === "newest") {
      return "&orderBy=newest";
    } else {
      return "";
    }
  };
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = () => {
    const BASE_URL = "https://www.googleapis.com/books/v1/volumes";
    setLoading(true);
    fetch(
      `${BASE_URL}?q=${searchVal}&maxResults=${maxEntries}&startIndex=${
        (page - 1) * maxEntries
      }` +
        filterprice() +
        filterprinttype() +
        orderby()
    )
      .then((data) => data.json())
      .then((books) => {
        setBooks({
          item: books.items,
          totalItem: books.totalItems,
        });
        setError("");
      })
      .catch((error) => {
        setError(error.message || "404! Error occured");
      })
      .finally(() => setLoading(false));
  };
  return (
    <InputContext.Provider
      value={{
        searchVal,
        setSearchVal,
        maxEntries,
        setMaxEntries,
        page,
        setPage,
        books,
        setBooks,
        loading,
        setLoading,
        error,
        setError,
        fetchData,
        filterModal,
        setFilterModal,
        filterparams,
        setFilterparams,
        isChecked,
        setIsChecked,
      }}
    >
      {props.children}
    </InputContext.Provider>
  );
}

export default Context;
