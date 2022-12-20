import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Button, Container } from "react-bootstrap";

export default class New_thread extends Component {
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

  render() {
	const themesObj = this.state;
		var write_theme = themesObj.themes;
		if (themesObj.themes.length === 0) {
			return <h2>Loading ... </h2>;
		} else {
			const theams = Object.entries(write_theme.themes).map(([id, name]) => ({
					id,
					name
				}));
			return (
			  <Container>
				<Form className="m-5" onSubmit={this.handleSubmit}>
				  <select defaultValue=""
					className="form-select form-select-lg mt-4 mb-4"
					aria-label="Default select example"
					id="theme">
					<option value="" disabled>
					  Выберите тему
					</option>
					{theams.map((value, index) => {
					  return <option value={value.name} key={index}>{value.name}</option>;
					})}
				  </select>
				  <Form.Group className="mb-3">
					<Form.Label>О чём бы вы хотели поговорить?</Form.Label>
					<Form.Control
					  id = "text"
					  as="textarea"
					  rows={5}
					  placeholder="Введите свой текст"
					/>
				  </Form.Group>
				  <Form.Group className="mb-3">
					<Form.Label>Загрузите фотографию вашего поста</Form.Label>
					<Form.Control type="file"  id="file"/>
						<Button type="submit" className="m-5" variant="dark">
						  Отправить пост
						</Button>
				  </Form.Group>
				</Form>
			  </Container>
			);
		  }
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.theme.value === "") {
      alert("Выберете тему!");
    } else if(!localStorage.getItem("LOGIN")){
		alert("Залогиньтесь!");
	}else if
	(!event.target.text.value) {
      alert("Введите какой-то текст");
    } else {
		axios.post('http://194.87.206.116/api/new_thread', {
			theme: event.target.theme.value,
			post_text: event.target.text.value,
			token: localStorage.getItem("ACCESS_TOKEN"),
			user: localStorage.getItem("LOGIN")
		  })
		  .then(function (response) {
			window.location.href = "/themes/" + event.target.theme.value;
		  })
		  .catch(function (error) {
			console.log(error);
		  });
	};
  }
}
