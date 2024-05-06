import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import logo from "../images/logo.png";
import { useDispatch } from "react-redux";
import { getsearch } from "../store/Slices/Movies";

export default function NavBar() {
  const dispatch = useDispatch();

  function handlesearch(word) {
   dispatch( getsearch(word))
  }
  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo} alt="dfs" />
            </a>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search  w-100">
              <i className="fa fa-search"></i>
              <input
                type="text"
                className="form-control"
                placeholder="ابحث"
                onChange={(e) => {
                  handlesearch(e.target.value);
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
