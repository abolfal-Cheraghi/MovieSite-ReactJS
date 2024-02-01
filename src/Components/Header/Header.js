import React, { memo } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import { CgMenuGridR } from "react-icons/cg";
import { GrFavorite } from "react-icons/gr";
import { AiOutlineAppstore } from "react-icons/ai";
import SearchBox from "../SearchBox/SearchBox";
import { HiOutlineBookmark } from "react-icons/hi";
function Header() {
  const expand = "lg";
  return (
    <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="https://presite.ir/Film/wp-content/uploads/2023/04/logo.svg"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <img
                src="https://presite.ir/Film/wp-content/uploads/2023/04/logo.svg"
                alt="logo"
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 c-white">
              <NavLink to="/" className="nav-link">
                خانه
              </NavLink>
              <NavLink to="/category/movies-ir" className="nav-link">
                فیلم ایرانی
              </NavLink>
              <NavLink to="/category/movies-foregin" className="nav-link">
                فیلم خارجی
              </NavLink>
              <NavLink to="/category/serials-ir" className="nav-link">
                سریال ایرانی
              </NavLink>
              <NavLink to="/category/serials-foregin" className="nav-link">
                سریال خارجی
              </NavLink>
              <NavLink to="/articles" className="nav-link">
                اخبار
              </NavLink>
            </Nav>
            <div className="nav-left">
              <SearchBox />
              <HiOutlineBookmark size="30px"/>
              <AiOutlineAppstore size="30px" />
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}


export default memo(Header)