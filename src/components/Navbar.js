import React, {useContext } from "react";
import "./Navbar.css";
import FilterModal from "./FilterModal";
import { ImBooks } from "react-icons/im";
import { IconContext } from "react-icons";
import { InputContext } from "./Context";
function Navbar() {
  const { setSearchVal, filterModal, setFilterModal } =
    useContext(InputContext);
  const Searchhandle = (e) => {
    e.target.value ? setSearchVal(e.target.value) : setSearchVal("all");
  };

  const doSomeMagic = function (fn, d) {
    let timer;
    return function () {
      let context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, d);
    };
  };
  const betterFunction = doSomeMagic(Searchhandle, 500);

  const handlefilter = () => {
    if (filterModal === false) {
      setFilterModal(true);
    } else {
      setFilterModal(false);
    }
  };
  return (
    <nav className="navbar">
      <ul className="lielem">
        <li className="bookicon">
          <IconContext.Provider value={{ color: "white" }}>
            <ImBooks />
          </IconContext.Provider>
        </li>
        <li>BooksLab</li>
      </ul>
      <div className="searchform">
        <div className="filtericon" title="filter" onClick={handlefilter}>
          <svg
            width="700pt"
            height="700pt"
            version="1.1"
            viewBox="0 0 700 700"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m140 122.5h283.15c4.9375 13.598 15.262 24.555 28.543 30.289 13.281 5.7344 28.336 5.7344 41.617 0 13.281-5.7344 23.605-16.691 28.543-30.289h38.148c6.2539 0 12.031-3.3359 15.156-8.75s3.125-12.086 0-17.5-8.9023-8.75-15.156-8.75h-38.148c-4.9375-13.598-15.262-24.555-28.543-30.289-13.281-5.7344-28.336-5.7344-41.617 0-13.281 5.7344-23.605 16.691-28.543 30.289h-283.15c-6.2539 0-12.031 3.3359-15.156 8.75s-3.125 12.086 0 17.5 8.9023 8.75 15.156 8.75zm332.5-35c4.6406 0 9.0938 1.8438 12.375 5.125s5.125 7.7344 5.125 12.375-1.8438 9.0938-5.125 12.375-7.7344 5.125-12.375 5.125-9.0938-1.8438-12.375-5.125-5.125-7.7344-5.125-12.375 1.8438-9.0938 5.125-12.375 7.7344-5.125 12.375-5.125z" />
              <path d="m560 262.5h-283.15c-4.9375-13.598-15.262-24.555-28.543-30.289-13.281-5.7344-28.336-5.7344-41.617 0-13.281 5.7344-23.605 16.691-28.543 30.289h-38.148c-6.2539 0-12.031 3.3359-15.156 8.75s-3.125 12.086 0 17.5 8.9023 8.75 15.156 8.75h38.148c4.9375 13.598 15.262 24.555 28.543 30.289 13.281 5.7344 28.336 5.7344 41.617 0 13.281-5.7344 23.605-16.691 28.543-30.289h283.15c6.2539 0 12.031-3.3359 15.156-8.75s3.125-12.086 0-17.5-8.9023-8.75-15.156-8.75zm-332.5 35c-4.6406 0-9.0938-1.8438-12.375-5.125s-5.125-7.7344-5.125-12.375 1.8438-9.0938 5.125-12.375 7.7344-5.125 12.375-5.125 9.0938 1.8438 12.375 5.125 5.125 7.7344 5.125 12.375-1.8438 9.0938-5.125 12.375-7.7344 5.125-12.375 5.125z" />
              <path d="m560 437.5h-125.65c-4.9375-13.598-15.262-24.555-28.543-30.289-13.281-5.7344-28.336-5.7344-41.617 0-13.281 5.7344-23.605 16.691-28.543 30.289h-195.65c-6.2539 0-12.031 3.3359-15.156 8.75s-3.125 12.086 0 17.5 8.9023 8.75 15.156 8.75h195.65c4.9375 13.598 15.262 24.555 28.543 30.289 13.281 5.7344 28.336 5.7344 41.617 0 13.281-5.7344 23.605-16.691 28.543-30.289h125.65c6.2539 0 12.031-3.3359 15.156-8.75s3.125-12.086 0-17.5-8.9023-8.75-15.156-8.75zm-175 35c-4.6406 0-9.0938-1.8438-12.375-5.125s-5.125-7.7344-5.125-12.375 1.8438-9.0938 5.125-12.375 7.7344-5.125 12.375-5.125 9.0938 1.8438 12.375 5.125 5.125 7.7344 5.125 12.375-1.8438 9.0938-5.125 12.375-7.7344 5.125-12.375 5.125z" />
            </g>
          </svg>
        </div>
        <input
          className="searchinput"
          type="search"
          placeholder="Search..."
          onChange={betterFunction}
          aria-label="Search"
        />
      </div>
      {/* </div> */}
      {filterModal ? <FilterModal /> : ""}
    </nav>
  );
}

export default Navbar;
