import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

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
            <div className="App">
                {message}
            </div>
        );
    }
}

export default App;
