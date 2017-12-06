import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import { Grid, Row, Col, Nav, Navbar, NavItem } from 'react-bootstrap';

import Home from './components/Home';
import Works from './components/Works';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
    constructor() {
        super();

        this.state = {
            message: ''
        };
    }

    componentWillMount() {
        this.getHome();
    }

    getHome() {
        axios.get('http://localhost:3001/')
        .then((response) => {
            this.setState({message: response.data});
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        let message = '';
        if (this.state.message) {
            message = this.state.message;
        }
        return (
            <Router>
                <Grid>
                    <Row>
                        <Col>
                            {navbarInstance}
                            
                            <Route exact path="/" component={Home} />
                            <Route path="/works" component={Works} />
                            <Route path="/pricing" component={Pricing} />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                        </Col>
                    </Row>
                </Grid>
            </Router>
        );
    }
}

const navbarInstance = (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <NavItem><Link to="">Home</Link></NavItem>
            <NavItem><Link to="works">Works</Link></NavItem>
            <NavItem><Link to="pricing">Pricing</Link></NavItem>
            <NavItem><Link to="about">About</Link></NavItem>
            <NavItem><Link to="contact">Contact</Link></NavItem>
        </Nav>
    </Navbar>
);

export default App;
