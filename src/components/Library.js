import React, { useContext } from "react";
import "./Library.css";
import Content from "./Content";
import { InputContext } from "./Context";
import Navbar from "./Navbar";
import Pagination from "./Pagination";

function Library() {
  const { books} = useContext(InputContext);
  const showPagination = () => {
    if (books.item && books.item.length !== 0) {
      return <Pagination />;
    }
  };

  return (
    <div className="Main_container">
      <Navbar />
      <Content />
      {showPagination()}
    </div>
  );
}

export default Library;
