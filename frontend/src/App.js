import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

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
                <div className="App">
                    Database message: {message}

                    <ul>
                        <li><Link to="">Home</Link></li>
                        <li><Link to="works">Works</Link></li>
                        <li><Link to="pricing">Pricing</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="contact">Contact</Link></li>
                    </ul>
                    
                    <Route exact path="/" component={Home} />
                    <Route path="/works" component={Works} />
                    <Route path="/pricing" component={Pricing} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </div>
            </Router>
        );
    }
}

export default App;
