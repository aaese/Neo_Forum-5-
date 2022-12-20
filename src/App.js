import React from "react";
import "./styles.css";
import Header from "./Components/Header";
import { Helmet } from "react-helmet";

export default function App() {	
  return (
    <div className="App">
      <Header />
      <Helmet>
        <style>{"body { background-color: rgba(153, 145, 203, 0.8); }"}</style>
      </Helmet>
    </div>
  );
}
