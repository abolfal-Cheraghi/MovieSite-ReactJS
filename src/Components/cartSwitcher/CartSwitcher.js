import React from "react";
import "./CartSwitcher.css";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";
export default function CartSwitcher(props) {
  return (
    <div className="cart-switcher">
      <Link to={`/movie/${props.id}`} className="nav-link">
        <img src={props.movieImage} alt="" />
      </Link>

      <div className="content-cart-switcher">
        <Link to={`/movie/${props.id}`} className="nav-link">
          {" "}
          <h4 className="fs-6">{props.movieName}</h4>
        </Link>
        <div className="footer-centent-cart-switcher">
          <span>
            <BiCategory size="16px" />
            {props.category}
          </span>
          <span className="c-pink">9 ماه {props.state}</span>
        </div>
      </div>
    </div>
  );
}
