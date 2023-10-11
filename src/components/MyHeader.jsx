import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartCounterContext } from "../context/CartCounterContext";

export const MyHeader = () => {
  const value = useContext(CartCounterContext);
  const { cart } = value;
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">
              products
            </NavLink>

            <NavLink className="nav-link" to="/product/0/edit">
              Add product
            </NavLink>

            <NavLink className="nav-link" to="/mycart">
              My cart ({cart.length})
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
