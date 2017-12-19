import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Home from './components/Home';
import Works from './components/Works';
import Services from './components/Services';
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
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                {navbarInstance}
                            </div>
                        </div>
                    </div>               
                    
                    <Route exact path="/" component={Home} />
                    <Route path="/works" component={Works} />
                    <Route path="/services-1" component={Services} />
                    <Route path="/services-2" component={Services} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    {footerInstance}
                </div>
            </Router>
        );
    }
}

const navbarInstance = (
    <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#"><span class="glyphicon glyphicon-tint" aria-hidden="true"></span> Mina</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link to="" className="nav-link">Home</Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Services
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to="services-1" className="dropdown-item">Service 1</Link>
                        <Link to="services-2" className="dropdown-item">Service 2</Link>
                    </div>
                </li>
                <li className="nav-item">
                    <Link to="works" className="nav-link">Works</Link>
                </li>
                <li className="nav-item">
                    <Link to="about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="contact" className="btn btn-outline-primary">Get Started</Link>
                </li>
            </ul>
        </div>
    </nav>
);

const footerInstance = (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div>Mina</div>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Works</a></li>
                        <li><a href="">About</a></li>
                    </ul>
                </div>
                <div className="col">
                    <div>About Us</div>
                    <ul>
                        <li><a href="">Company</a></li>
                        <li><a href="">Jobs</a></li>
                        <li><a href="">Press</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </div>
                <div className="col">
                    <div>Accessibility</div>
                    <ul>
                        <li><a href="">Typography</a></li>
                        <li><a href="">Colors</a></li>
                        <li><a href="">Screen Readers</a></li>
                        <li><a href="">Verbiage</a></li>
                    </ul>
                </div>
                <div className="col">
                    <div>Resources</div>
                    <ul>
                        <li><a href="">Mina Guide</a></li>
                        <li><a href="">Support</a></li>
                        <li><a href="">Process</a></li>
                        <li><a href="">Developers</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
);

export default App;