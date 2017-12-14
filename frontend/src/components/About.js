import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="jumbotron">
                        <h1 className="display-1">Our Company</h1>
                        <p className="lead">We'll help your web application easy to read for a wider variety of people</p>
                    </div>
                </div>
                <div className="container screenie">
                    <div className="row">
                        <div className="col">
                            <h2 className="display-2">We'll help you get to more people</h2>
                            <p>We provide you with the steps to make your product more accessible.</p>
                        </div>
                        <div className="col">
                            <h2>Brax Yurie</h2>
                            <p>We provide you with the steps to make your product more accessible. We provide you with the steps to make your product more accessible.</p>
                        </div>
                        <div className="col">
                            <h2>Tiny Tina</h2>
                            <p>We provide you with the steps to make your product more accessible. We provide you with the steps to make your product more accessible.</p>
                        </div>
                    </div>
                </div>
                <div className="container trusted">
                    <div className="row">
                        <div className="col">
                        </div>
                        <div className="col">
                            <h2 className="display-2">Trusted by organizations everywhere</h2>
                            <p>We've helped companies from all over the world make their web applications accessible.</p>
                            <a href="" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
                
                <div className="container trusted">
                    <div className="row">
                        <div className="col">
                            <h2 className="display-2">Trusted by organizations everywhere</h2>
                            <p>We've helped companies from all over the world make their web applications accessible.</p>
                            <a href="" className="btn btn-primary">Learn More</a>
                        </div>
                        <div className="col">
                        </div>
                    </div>
                </div>

                <div className="container try text-center">
                    <div className="row">
                        <div className="col">
                            <h2 className="display-2">Some accordions</h2>
                            <p>No matter how small or large your application, we can help!</p>
                        </div>
                    </div>
                </div>
                <div className="container try text-center">
                    <div className="row">
                        <div className="col">
                            <p>Image gallery here</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
