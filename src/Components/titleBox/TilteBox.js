import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

export default function TilteBox(props) {
  return (
    <>
      <div className="conteiner-box-title d-flex align-items-center justify-content-between w-100">
        <div className="title">
          <h4 className="fs-3 d-flex gap-2 fw-bold">
            <span>{props.textWhite} </span>
            <span className="c-pink">{props.textPink}</span>
          </h4>
        </div>
        <div className="box-link-title">
          <Link
            to={props.link}
            className="nav-link"
            style={{ color: "#f5f5f5", fontSize: "14px" }}
          >
            <span>{props.infoLink}</span>
            <MdArrowBackIos size="14px" />
          </Link>
        </div>
      </div>
      <hr />
    </>
  );
}
