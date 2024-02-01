import React, { useState } from "react";
import "./SerialCart.css";
import { BiCategory } from "react-icons/bi";
import { MdOutlineDateRange } from "react-icons/md";
import { CiMicrophoneOn } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function SerialCart(props) {
  const story = props.movieStory;
  const SliceStory = `${story.slice(0, 100)} و...`;

  return (
    <div className="container-serial-cart">
      <div className="box-serial-cart d-flex p-4 align-items-center">
        <div className="img-box">
          <Link to={`/serial/${props.id}`}>
            <img src={props.movieImage} alt="" className="img-fluid" />
          </Link>
        </div>
        <div className="info-box">
          <Link to={`/serial/${props.id}`} className="nav-link">
            <h2 className="fs-5  title-movie-cart lalezar">
              {props.movieName}
            </h2>
          </Link>
          <div className="into-box d-flex">
            <div>
              <BiCategory size="18px" />
              {props.category}
            </div>
            <div className="hide-phone">
              <MdOutlineDateRange size="18px" />
              انتشار : {props.DateMade}
            </div>
            <div className="c-pink">
              <CiMicrophoneOn size="18px" />
              {props.language}
            </div>
          </div>
          <p>{SliceStory}</p>
        </div>
      </div>
    </div>
  );
}
