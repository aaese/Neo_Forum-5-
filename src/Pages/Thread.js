import React, { Component } from "react";
import axios from "axios";
import {
  Container,
  Card,
  Button,
} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Form } from "react-bootstrap";


export default class Home extends Component {

	constructor(props) {
    super(props);
    this.state = {
		thread: []
		};
	}
	
		componentDidMount() {
		axios.get("http://194.87.206.116/api" + window.location.pathname).then((res) => {
		const thread = res.data;
		this.setState({
			thread: thread
			});
		});
	}
	
  render() {
	const threadObj = this.state;
	var write_thread = threadObj.thread.posts;
	if (threadObj.thread.length === 0) {
		return <h2>Loading ... </h2>;
	} else {
		const obj = Object.entries(write_thread).map(([id, thread]) => ({
			id,
			thread
		}));
		return (
		<>
			{obj.map((value, index) => (
				<Container key={index}>
					<Card className="mt-3">
						<Row fixed="top">	
								<Col className="m-2" xs="auto">
								#{index}
								</Col>
								<Col className="m-2" xs="auto">
									
								</Col>
						</Row>
						<Form.Label align="left">{value.thread}</Form.Label>
					</Card>
				</Container>
			))}

		
			<div className="fixed-bottom">
				<Container className="m-5 m-auto">
				<Form className="m-5" onSubmit={this.handleSubmit}>
					<Form.Group className="mb-3">
						<Form.Control
							id="text"
							as="textarea"
							placeholder="Введите текст сообщения!"/>
						<Button type="submit" className="m-5" variant="dark">
							 Отправить пост
						</Button>
					</Form.Group>
					</Form>
				</Container>
			</div>
		</>
		);
	}
  }
  
    handleSubmit = (event) => {
    event.preventDefault();
	if (!event.target.text.value) {
      alert("Введите какой-то текст");
	} else if(!localStorage.getItem("LOGIN")){
		alert("Залогиньтесь!");
	}else{
		console.log(event.target.text.value)
		console.log(window.location.href.substr(window.location.href.lastIndexOf('/') + 1))
		
		axios.post('http://194.87.206.116/api/new_post', {
			t_id: window.location.href.substr(window.location.href.lastIndexOf('/') + 1),
			post_text: event.target.text.value,
			token: localStorage.getItem("ACCESS_TOKEN"),
			user: localStorage.getItem("LOGIN")
		  })
		  .then(function (response) {
			window.location.reload();
		  })
		  
	};
  }
  
}
