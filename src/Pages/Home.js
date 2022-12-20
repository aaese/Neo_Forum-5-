import React, { Component } from "react";
import {
  Container,
  Card,
  Button,
} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Home extends Component{
	
	constructor(props) {
    super(props);
    this.state = {
		themes: []
		};
	}	
  
	componentDidMount() {
		axios.get("http://194.87.206.116/api/themes/").then((res) => {
		this.setState({
			themes: res.data
			});
		});
	};
	
	render()
	{
		const themesObj = this.state;
		var write_theme = themesObj.themes;
		if (themesObj.themes.length === 0) {
			return <h2>Loading ... </h2>;
		} else {
			const themes = Object.entries(write_theme.themes).map(([id, name]) => ({
			  id,
			  name
			}));
			return (
				<Container>
					<Row xs={1} md={3} className="g-4" >
						{themes.map((value, index) => {
							return (
								<Col key={index}>
									<Card>
										<Card.Body>
											<Card.Title>
												<h2 style={{ textTransform: "uppercase" }}>
													<b>{value.name}</b>
												</h2>
											</Card.Title>
											<Link to={{ pathname: "/themes/" + value.name}}>
												<Button variant="dark">
													Зайти в тему
												</Button>
											</Link>
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
