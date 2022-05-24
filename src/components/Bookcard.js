import React from "react";
import "./Bookcard.css";
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";
import { ImBooks } from "react-icons/im";

function Bookcard({ book}) {
  return (
    <div className="card">
      <div className="image">
        <img
          src={
            book.volumeInfo?.imageLinks?.thumbnail ||
            book.volumeInfo?.imageLinks?.smallThumbnail
          }
          alt="Img unavailable"
        />
      </div>
      <div className="details">
        <div className="Name detailsitem">
          <b>Title:</b> {book.volumeInfo?.title ?? "Unavailable"}
        </div>
        <div className="Category detailsitem">
          <b>Category:</b> {book.volumeInfo?.categories ?? "N/A"}
        </div>
        <div className="Totalpage detailsitem">
          <b>Pages:</b> {book.volumeInfo?.pageCount ?? "N/A"}
        </div>
        <div className="Rating detailsitem">
          <b>Rating:</b> {book.volumeInfo?.averageRating ?? "no-rating"}{" "}
          <IconContext.Provider value={{ color: "yellow", className: "icons" }}>
            <FaStar />
          </IconContext.Provider>
        </div>
        <div className="Price detailsitem">
          <b>Price:</b> {book.saleInfo?.listPrice?.amount ?? "Free"}{" "}
          {book.saleInfo?.listPrice?.currencyCode ?? ""}
        </div>
        <a
          href={`${book.volumeInfo?.infoLink ?? ""}`}
          target="_blank"
          rel="noreferrer" 
          className="moreinfo"
        >
          More Info
        </a>
      </div>
    </div>
  );
}

export default Bookcard;
