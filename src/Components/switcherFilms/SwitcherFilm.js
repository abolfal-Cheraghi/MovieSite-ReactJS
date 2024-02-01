import React, { useEffect, useRef, useState } from "react";
import "./SwitcherFilm.css";
import Title from "../Title/Title";
import { Col, Row } from "react-bootstrap";
import CartSwitcher from "../cartSwitcher/CartSwitcher";
import axios from "axios";
export default function SwitcherFilm(props) {
  const [switcherText, setSwitcherText] = useState("ir");
  const [dataMovieSwitcher, setDataMovieSwitcher] = useState([]);
  const switcherRef = useRef();
  const switcher = switcherRef.current;

  useEffect(() => {
    getMovieSwitcher("ایران");
  }, []);

  const changeSwitcherHandler = (e) => {
    setSwitcherText(e.target.value);
  };

  // switcher sidebar
  const switchHandler = (e) => {
    if (e.target.value == "ir") {
      getMovieSwitcher("ایران");
    } else if (e.target.value == "uk") {
      getMovieSwitcher("انگلیس");
    }
  };

  //function get serial irani Or foregin
  const getMovieSwitcher = (made) => {
    axios.get(`http://localhost:5000/movies/?made=${made}`).then((res) => {
      setDataMovieSwitcher(res.data);
    });
  };

  return (
    <>
      <div className="header-Switcher d-flex justify-content-between align-items-center">
        <Title firstT="سریال" secT="خارجی | ایرانی" />
        <div className="switch-box">
          <label htmlFor="iran" className="switch-item">
            ایرانی
          </label>
          <input
            type="checkbox"
            id="iran"
            name="switcher"
            value="ir"
            className="switch-item"
            onClick={changeSwitcherHandler}
            onChange={switchHandler}
          />
          <label htmlFor="uKingDown" className="switch-item">
            انگلیس
          </label>
          <input
            type="checkbox"
            id="uKingDown"
            name="switcher"
            value="uk"
            onClick={changeSwitcherHandler}
            onChange={switchHandler}
          />
          <span
            className="switcher"
            id={switcherText == "ir" ? "change-switchr" : ""}
            ref={switcherRef}
          ></span>
        </div>
      </div>
      <Row
        className="my-5
              4"
      >
        {dataMovieSwitcher.map((item) => (
          <Col key={item.BtnSlider} className="my-2">
            <CartSwitcher {...item} state="پیش" />
          </Col>
        ))}
      </Row>
    </>
  );
}
