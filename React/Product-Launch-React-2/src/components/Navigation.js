import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Features from "./Features";
import About from "./About";
import Product from "./Product";
import Contact from "./Contact";
import Services from "./Services";
import Statistics from "./Statistics";
import './Nav.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Navbar color="" light expand="md">
            <NavbarBrand href="/">React JS</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto header" navbar>
                <NavItem>
                  <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/Features">Features</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/About">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/Product">Products</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/Services">News Letter</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/Contact">Contact</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/Statistics">Statistics</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/Features" component={Features} />
            <Route path="/About" component={About} />
            <Route path="/Product" component={Product} />
            <Route path="/Services" component={Services} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Statistics" component={Statistics} />
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default Navigation;