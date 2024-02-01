import React from "react";
import "./MovieCart2.css";
import { PiDownload } from "react-icons/pi";
import { HiOutlineBookmark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { MdOutlineDateRange } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { CiMicrophoneOn } from "react-icons/ci";
import { Col, Row } from "react-bootstrap";
import { LiaUserAltSolid } from "react-icons/lia";
import { PiUsersThreeLight } from "react-icons/pi";
export default function MovieCart2(props) {
  const story = props.movieStory ;
  const sliceStory = `${story.slice(0, 200)}...`;
  return (
    <div className="container-cart-movie-2">
      <Row className="box-cart-movie-2">
        <Col className="col-12 col-sm-12 col-md-3 col-lg-3 img-box-2">
          <Link to={`/movie/${props.id}`} className="nav-link">
            <img src={props.movieImage} alt="" className="img-fluid" />
          </Link>
        </Col>
        <Col className="col-12 col-sm-12 col-md-9 col-lg-9 content-cart-movie-2">
          <div className="icon-save-box-movie">
            <HiOutlineBookmark size="25px" />
          </div>

          <Link
            to={`/movie/${props.id}`}
            className="nav-link"

          >
            <h2 className="fs-4  title-movie-cart lalezar">
              {props.movieName}
            </h2>
          </Link>

          <div className="into-box-2 d-flex">
            <div>
              <BiCategory size="18px" />
              {props.category}
            </div>
            <div>
              <MdOutlineDateRange size="18px" />
              انتشار : {props.DateMade}
            </div>
          </div>
          <p>{sliceStory}</p>
          <hr />
          <div className="footer-cart-movie-2 d-flex align-items-center justify-content-between">
            <div className="right-footer-cm d-flex flex-column">
              <span>
                <LiaUserAltSolid size="18px" />
                کارگردان : {props.director}
              </span>
              <span>
                <PiUsersThreeLight size="18px" />
                بازیگران : {props.Actors}
              </span>
            </div>
            <div className="left-footer-cm">
              <Link to={`/movie/${props.id}`} className="nav-link">
                <span>
                  <PiDownload size="28px" />
                  دانلود و مشاهده
                </span>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
