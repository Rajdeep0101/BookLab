import React, {useContext } from "react";
import { InputContext } from "./Context";
import "./FilterModal.css";

function FilterModal() {
  const {
    setPage,
    setFilterModal,
    filterparams,
    setFilterparams,
    isChecked,
    setIsChecked,
  } = useContext(InputContext);

  const filterfree = () => {
    setIsChecked({
      ...isChecked,
      price: { free: !isChecked.price.free, paid: isChecked.price.paid },
    });
  };
  const filterpaid = () => {
    setIsChecked({
      ...isChecked,
      price: { free: isChecked.price.free, paid: !isChecked.price.paid },
    });
  };
  const filterbook = () => {
    setIsChecked({
      ...isChecked,
      printtype: {
        books: !isChecked.printtype.books,
        magazines: isChecked.printtype.magazines,
      },
    });
  };
  const filtermagazine = () => {
    setIsChecked({
      ...isChecked,
      printtype: {
        books: isChecked.printtype.books,
        magazines: !isChecked.printtype.magazines,
      },
    });
  };
  const handleSortBy = (e) => {
    setIsChecked({ ...isChecked, orderby: e.target.value });
  };
  const filterapply = () => {
    setPage(1);
    setFilterparams({
      ...filterparams,
      price: { free: isChecked.price.free, paid: isChecked.price.paid },
      printtype: {
        books: isChecked.printtype.books,
        magazines: isChecked.printtype.magazines,
      },
      orderby: isChecked.orderby,
    });
    setFilterModal(false);
  };
  return (
    <div className="filtermodal">
      <div className="container">
        <div className="heading">
          <span>FILTERS</span>
        </div>
        <div className="filterbody">
          <div className="filters">
            <div className="filterheading">PRICE</div>
            <label htmlFor="free">Free</label>
            <input
              type="checkbox"
              id="free"
              checked={isChecked.price.free}
              onChange={filterfree}
            />
            <label htmlFor="paid">Paid</label>
            <input
              type="checkbox"
              id="paid"
              checked={isChecked.price.paid}
              onChange={filterpaid}
            />
          </div>
          <div className="filters">
            <div className="filterheading">PRINT-TYPE</div>
            <label htmlFor="book">Book</label>
            <input
              type="checkbox"
              id="book"
              checked={isChecked.printtype.books}
              onChange={filterbook}
            />
            <label htmlFor="magazine">Magazines</label>
            <input
              type="checkbox"
              id="magazine"
              checked={isChecked.printtype.magazines}
              onChange={filtermagazine}
            />
          </div>
          <div className="filters">
            <label htmlFor="sortby" className="filterheading">
              SORT BY
            </label>
            <select
              name="orderby"
              className="orderby"
              value={isChecked.orderby}
              onChange={handleSortBy}
            >
              <option value="relevance">Relevance</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
        <div className="button">
          <button
            className="Cancelbtn"
            onClick={() => {
              setFilterModal(false);
            }}
          >
            Cancel
          </button>
          <button className="Applybtn" onClick={filterapply}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterModal;
