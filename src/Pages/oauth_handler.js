import React, { Component } from "react";
import { useSearchParams, Navigate } from "react-router-dom";
import axios from "axios";

function withSearchParams(Component) {
  return (urlParams) => (
    <Component {...urlParams} urlParams={useSearchParams()} />
  );
}

class Oauth_handler extends Component {
  render() {
    const [URLSearchParams] = this.props.urlParams;
    const code = URLSearchParams.get("code");
    if (code) {
		axios
        .post("http://194.87.206.116/api/auth", {
				code: code
        })
        .then((res) => {
          const data_from_server = res.data;
		  if(data_from_server.login){
			  localStorage.setItem("LOGIN", data_from_server.login.login);
			  localStorage.setItem("ACCESS_TOKEN", data_from_server.token);
		  }
		})
      return <Navigate to="/" replace={true} />
    } else {
      return <Navigate to="/login" replace={true} />;
    }
  }
}

export default withSearchParams(Oauth_handler);