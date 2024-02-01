import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import SliderHome from "../../Components/SliderHome/SliderHome";
import { Col, Container, Row } from "react-bootstrap";
import MovieCart1 from "../../Components/MovieCart1/MovieCart1";
import axios from "axios";
import { SwiperSlide } from "swiper/react";
import BaseSlider from "../../Components/BaseSlider/BaseSlider";
import BtnSlider from "../../Components/BtnSlider/BtnSlider";
import FilterBox from "../../Components/FilterBox/FilterBox";
import TilteBox from "../../Components/titleBox/TilteBox";
import SerialCart from "../../Components/SerialCart/SerialCart";
import MovieCart2 from "../../Components/MovieCart2/MovieCart2";
import SwitcherFilm from "../../Components/switcherFilms/SwitcherFilm";
import ReactPaginate from "react-paginate";
import CartSwitcher from "../../Components/cartSwitcher/CartSwitcher";

export default function Home() {
  const [dataMoviesPopular, setDataMoviesPopualar] = useState([]);
  const [dataSerialIr, setDataSerialIr] = useState([]);
  const [dataMovieIr, setDataMovielIr] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  let pageCountMovieIr;

  // request movies
  useEffect(() => {
    axios.get("http://localhost:5000/movies/?type=movie").then((res) => {
      setDataMoviesPopualar(res.data);
    });
    axios.get("http://localhost:5000/movies/?type=serial").then((res) => {
      setDataSerialIr(res.data);
    });

    fetchMovieIr(1);
  }, []);

  const handlePageChange = (data) => {
    pageCountMovieIr = data.selected + 1;
    fetchMovieIr(pageCountMovieIr);
  };

  const fetchMovieIr = (page) => {
    axios
      .get(`http://localhost:5000/movies?_page=${pageCountMovieIr}&_limit=4`)
      .then((response) => {
        setPageCount(Math.ceil(response.headers.get("x-total-count") / 4));
        setDataMovielIr(response.data);
      });
  };

  return (
    <>
      <Header />

      <SliderHome />
      <Container>
        <Row>
          <Col className="col-12 col-md-12 col-lg-2 box-title d-flex flex-column">
            <div className="fs-2">
              <span className="c-pink lalezar">برترین </span>
              <span className="lalezar">فیلم ها </span>
            </div>
            <BtnSlider />
          </Col>
          <Col className="col-12 col-md-12 col-lg-10">
            <BaseSlider slide={4} className="popular-sec">
              {dataMoviesPopular.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <MovieCart1 {...movie} />
                </SwiperSlide>
              ))}
            </BaseSlider>
          </Col>
        </Row>

        {/* section serials */}

        <section className="serial">
          <FilterBox />
          <Row className="gx-5">
            <Col className="col-12 col-md-12 col-lg-6 align-content-center my-3">
              <TilteBox
                textWhite="سریال"
                textPink="ایرانی"
                link="http://localhost:3000/category/serials-ir"
                infoLink="سریال های بیشتر"
              />
              <Row className="gap-3">
                {dataSerialIr.map((serialIr) => (
                  <Col className="col-12 w-100">
                    <SerialCart {...serialIr} />
                  </Col>
                ))}
              </Row>
            </Col>
            <Col className="col-12 col-md-12 col-lg-6 my-3">
              <TilteBox
                textWhite="سریال"
                textPink="خارجی"
                link="http://localhost:3000/category/serials-foregin"
                infoLink="سریال های بیشتر"
              />
              <Row className="gap-3">
                {dataSerialIr.map((serialIr) => (
                  <Col className="col-12">
                    <SerialCart {...serialIr} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </section>
      </Container>

      {/* section news movie */}
      <section className="news-movies my-5 py-5">
        <Container>
          <TilteBox
            textWhite="جدیدترین"
            textPink="فیلم های خارجی"
            link="http://localhost:3000/category/movies-foregin"
            infoLink="فیلم های بیشتر"
          />
          <BaseSlider className="my-3" slide={5}>
            {dataMoviesPopular.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCart1 {...movie} />
              </SwiperSlide>
            ))}
          </BaseSlider>
        </Container>
      </section>

      <section className="news-ir">
        <Container>
          <Row>
            <Col className="col-12 col-md-12 col-lg-8 my-4">
              <TilteBox
                textWhite="جدیدترین"
                textPink="فیلم های ایرانی"
                link="http://localhost:3000/category/movies-ir"
                infoLink="فیلم های بیشتر"
              />
              <Row>
                {dataMovieIr.map((film) => (
                  <Col className="col-12 my-1" key={film.id}>
                    <MovieCart2 {...film} />
                  </Col>
                ))}
                <ReactPaginate
                  pageCount={pageCount}
                  previousLabel="قبلی"
                  nextLabel="بعدی"
                  breakLabel="..."
                  containerClassName="pagination justify-content-center"
                  pageClassName="page-item"
                  nextClassName="page-item"
                  previousClassName="page-item"
                  pageLinkClassName="page-link"
                  nextLinkClassName="page-link"
                  previousLinkClassName="page-link"
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  activeLinkClassName="active"
                  onPageChange={handlePageChange}
                />
              </Row>
            </Col>
            <Col className="col-12 col-md-12 col-lg-4 my-4">
              <SwitcherFilm />
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}
