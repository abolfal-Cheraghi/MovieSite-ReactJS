import React, { useEffect, useState } from "react";
import "./Movie.css";
import Header from "../../Components/Header/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { CiMicrophoneOn } from "react-icons/ci";
import { FaDownload, FaPlay } from "react-icons/fa6";
// video player package
import { Player, ControlBar } from "video-react";
import "video-react/dist/video-react.css";
import TilteBox from "../../Components/titleBox/TilteBox";
import BaseSlider from "../../Components/BaseSlider/BaseSlider";
import MovieCart1 from "../../Components/MovieCart1/MovieCart1";
import { SwiperSlide } from "swiper/react";
import SwitcherFilm from "../../Components/switcherFilms/SwitcherFilm";
import FormDidgah from "../../Components/FormDidgah/FormDidgah";
export default function SinglePageMovies() {
  const [dataMovie, setDataMovie] = useState([]);
  const [dataMovieDif, setDataMovieDif] = useState([]);
  const foundID = useParams().movieId;
  useEffect(() => {
    axios.get(`http://localhost:5000/movies/${foundID}`).then((res) => {
      setDataMovie(res.data);
      getMovieDifrent(dataMovie.category);
    });
  }, [dataMovie]);

  const getMovieDifrent = (category) => {
    axios
      .get(`http://localhost:5000/movies?category=${category}`)
      .then((res) => {
        setDataMovieDif(res.data);
      });
  };

  return (
    <>
      <Header />
      <section className="intro-movie align-items-center fluid">
        <Container>
          <Row className="wrapper-page-movie">
            <Col className="col-12 col-sm-12 col-md-3 col-lg-4 img-movie-page">
              <img
                src={dataMovie.movieImage}
                alt="img-movie"
                className="img-fluid"
              />
            </Col>
            <Col className="col-12 col-sm-12 col-md-9 col-lg-8">
              <div className="info-movie-page">
                <h1 className="fs-2 lalezar">{dataMovie.movieName}</h1>
                <div className="box-into-movie">
                  <div className="imdb-box">IMDB :</div>
                  <div className="category-box">
                    <span>{dataMovie.category}</span>
                  </div>
                  <div className="language-box">
                    <CiMicrophoneOn size="24px" />{" "}
                    <span>{dataMovie.language}</span>
                  </div>
                  <div className="showFor-box">
                    مناسب افراد
                    <span className="appropriate">{dataMovie.appropriate}</span>
                  </div>
                </div>
                <p className="description-movie-page">{dataMovie.movieDesc}</p>

                <div className="box-acters">
                  <p className="color-g">
                    کارگردان : <b className="color-g">{dataMovie.director}</b>
                  </p>
                  <hr />
                  <p className="color-g">
                    بازیگران : <b className="color-g">{dataMovie.Actors}</b>
                  </p>
                </div>
                <div className="box-player-movie">
                  <div className="info-movie-section w-60">
                    <span>ساخت : {dataMovie.DateMade}</span>
                    <span>کشور : {dataMovie.made}</span>
                    <span>مدت : {dataMovie.duration} دقیقه</span>
                  </div>
                  <div
                    className="btn-player-movie d-flex gap-2 w-40"
                    style={{ color: "#000000 !important" }}
                  >
                    <button id="btn-movie-1" href="#section-download">
                      <a
                        href="#section-download"
                        style={{ color: "#000000 !important" }}
                      >
                        بخش دانلود
                      </a>
                      <FaDownload />
                    </button>

                    <button id="btn-movie-2">
                      <FaPlay />
                      <a href="#story-section"> پیشنمایش </a>
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* section story  */}

      <section className="section-story-movie container" id="story-section">
        <div className="story-box-movie p-4">
          <Row className="align-items-center">
            <Col className="content-story-box col-12 col-md-12 col-lg-6">
              <span className="c-pink fs-4">معرفی کلی</span>
              <h4>داستان و پیش نمایش</h4>
              <p className="color-g mt-2">{dataMovie.movieStory}</p>
            </Col>
            <Col className="video-story-box col-12 col-md-12 col-lg-6">
              {/* <video src={dataMovie.trailer} controls></video> */}
              <Player autoPlay src={dataMovie.trailer}>
                <ControlBar autoHide={false} className="my-class" />
              </Player>
            </Col>
          </Row>
        </div>
      </section>

      {/* section download */}

      <section
        className="section-download-movie container"
        id="section-download"
      >
        <div className="download-box-movie p-3">
          <span className="fs-4">بخش دانلود</span>
          <h4>کیفیت های مختلف با زیر نویس</h4>
          <hr />
          <div className="wrapper-cart-download">
            <div className="cart-download-movie">
              <div className="d-flex align-items-center gap-3">
                <span className="fs-5 color-g">دانلود با کیفیت 1080p</span>
                <span className="fs-5 color-g">حجم : 1.1 گیگابایت</span>
              </div>
              <div className="btn-down">
                <button id="btn-movie-1" className="special-btn">
                  <FaDownload />
                  دانلود ویدیو
                </button>
              </div>
            </div>
            <div className="cart-download-movie">
              <div className="d-flex align-items-center gap-4">
                <span className="fs-5 color-g">دانلود با کیفیت 720p</span>
                <span className="fs-5 color-g">حجم : 0.765 گیگابایت</span>
              </div>
              <div className="btn-down">
                <button id="btn-movie-1" className="special-btn">
                  <FaDownload />
                  دانلود ویدیو
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section diffrent movie */}

      <section className="slider-movie-page container">
        <TilteBox
          textWhite="فیلم"
          textPink=" های مشابه"
          infoLink="فیلم های بیشتر"
          link={
            dataMovie.made == "ایران"
              ? "http://localhost:3000/category/movies-ir"
              : "http://localhost:3000/category/movies-foregin"
          }
        />
        <BaseSlider>
          {/* {dataMovieDif.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCart1 {...movie} />
            </SwiperSlide>
          ))} */}
        </BaseSlider>
      </section>

      {/* section didgah */}

      <section className="section-didgah container my-5">
        <Row className="wrapper-section-didgah">
          <Col className="col-12 col-md-12 col-lg-8">
            <FormDidgah />
          </Col>
          <Col className="col-12 col-md-12 col-lg-4">
            <SwitcherFilm />
          </Col>
        </Row>
      </section>
    </>
  );
}
