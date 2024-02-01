import React from 'react'
import './MovieCart1.css'
import { BsBookmark } from "react-icons/bs";
import { RxTimer } from "react-icons/rx";

import { Link } from 'react-router-dom';
import { HiOutlineBookmark } from "react-icons/hi";
export default function MovieCart1(props) {

  return (
    <div className="cart-movie">
      <img src={props.movieImage} alt="" className="img-fluid img-movie-cart" />

      <div className="content-movie-cart">
        <div className="save-movie-cart">
          <BsBookmark size="20px" />
        </div>
        <Link to={`/movie/${props.id}`} className="nav-link">
          <h2 className="fs-6  title-movie-cart lalezar">{props.movieName}</h2>
        </Link>
        <div className="into-movie-cart">
          <span>
            <RxTimer size="16px" />
            {props.DateMade}
          </span>
          <span>
            <HiOutlineBookmark size="16px" />
            {props.language}
          </span>
        </div>
      </div>
      <div className="shadow-cart-movie"></div>
    </div>
  );
}
