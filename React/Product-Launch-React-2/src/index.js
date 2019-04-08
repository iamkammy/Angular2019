import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./components/Navigation";
import 'mdbreact/dist/css/mdb.css';


ReactDOM.render(
  <Navigation/>, 
  document.getElementById("root")
);