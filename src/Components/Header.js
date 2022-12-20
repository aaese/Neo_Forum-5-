import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import logo from "./neo_logo.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import New_thread from "../Pages/New_thread";
import Log_in from "../Pages/Log_in";
import Themes from "../Pages/Themes";
import Thread from "../Pages/Thread";
import Oauth_handler from "../Pages/oauth_handler";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="/" inline="true">
              <img
                src={logo}
                hight="30"
                width="30"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Brand>
              <nav className="navbar navbar-light" className="mr-auto">
                <span className="navbar-brand mb-0 h1">Neo Forum</span>
              </nav>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="/New_thread"> New thread </Nav.Link>
                <Nav.Link href="/Log_in"> Log in </Nav.Link>
              </Nav>
              <Navbar.Collapse
                id="responsive-navbar-nav"
                className="justify-content-end"
              >
              </Navbar.Collapse>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div style={{ margin: 90 }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new_thread" element={<New_thread />} />
              <Route path="/themes/:text" element={<Themes />} />
              <Route path="/thread/:id" element={<Thread />} />
              <Route path="/log_in" element={<Log_in />} />
			  <Route
				path="/oauth2/redirect"
				element={<Oauth_handler />}
				/>
            </Routes>
          </BrowserRouter>
        </div>
      </>
    );
  }
}
