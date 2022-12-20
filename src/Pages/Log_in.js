import React, { Component } from "react";
import {
  Button,
} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Nav } from "react-bootstrap";

export default class Login extends Component {
  render() {
    const githubUrl = "https://github.com/login/oauth/authorize?client_id=89fdb6f152e43d0652a8";
    return (
      <div>
	  <Row xs={1} md={1} className="g-4" >
	  <Col key="1">
        <Button variant="dark">
			<Nav.Link href={githubUrl}>
				Login using GitHub
			</Nav.Link>
        </Button>
	  </Col>
	  <Col key="2">
		<Button variant="dark">
			<Nav.Link href="/">
			{localStorage.clear()}
				Logout
			</Nav.Link>
        </Button>
	   </Col>
	   </Row>
      </div>
    );
  }
}

