import React, { useContext } from "react";
import { InputContext } from "./Context";
import "./Pagination.css";

function Pagination() {
  const { maxEntries, setMaxEntries, books, page, setPage } =
    useContext(InputContext);
  const maxPage = Math.ceil(books.totalItem / maxEntries);
  const handleMaxEntry = (e) => {
    setMaxEntries(e.target.value);
    setPage(1);
  };
  const entryValue = () => {
    const entriesArray = [];
    for (let i = 1; i <= 40; i++) {
      entriesArray.push(i);
    }
    return entriesArray.map((entry) => (
      <option value={`${entry}`} key={entry}>
        {entry}
      </option>
    ));
  };
  const handlePrev = () => {
    setPage(page - 1);
  };
  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <div className="pagination">
      <div className="maxEntries">
        <select name="maxentry" value={maxEntries} onChange={handleMaxEntry}>
          {entryValue()}
        </select>
        <span>MaxResults</span>
      </div>
      <div className="pagebtn">
        <button className="Prev" onClick={handlePrev} disabled={page === 1}>
          Prev
        </button>
        {page}
        <button
          className="Next"
          onClick={handleNext}
          disabled={page === maxPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
