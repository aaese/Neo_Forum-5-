import React, { Component } from "react";
import {
  Container,
  Card,
  Button,
} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Nav } from "react-bootstrap";
import axios from "axios";

export default class Home extends Component {
	
	constructor(props) {
    super(props);
    this.state = {
		thread: []
		};
	}
	
		componentDidMount() {
		axios.get("http://194.87.206.116/api/" + window.location.pathname).then((res) => {
		const thread = res.data;
		this.setState({
			thread: thread
			});
		});
	}
	
	render() {
		const threadObj = this.state;
		var write_thread = threadObj.thread;
		if (threadObj.thread.length === 0) {
			return <h2>Loading ... </h2>;
		} else {
			const obj = Object.entries(write_thread.threads).map(([id, thread]) => ({
				id,
				thread
			}));
			
			return (
				<Container>
					<Row xs={1} md={5} className="g-4">
					{obj.map((value, index) => {
					return (
							<Col key={index}>
								<Card>
									<Card.Img
									  variant="top"
									  //src={value.thread.pic}
									/>
									<Card.Body>
										<Card.Title>{value.thread.substring(0, 100)}</Card.Title>
										<Button variant="dark">
											<Nav.Link href={"/thread/" + value.id}>
												{" "}
												Обсудить {value.name}{" "}
											</Nav.Link>
										</Button>
									</Card.Body>
								</Card>
							</Col>
							);
					})}
					</Row>
				</Container>
				);
		}
  }
}
