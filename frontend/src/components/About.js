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
                <div className="container about">
                    <div className="row">
                        <div className="col col-lg-6">
                            <h2 className="display-4">We have a group of pretty cool people</h2>
                            <p>We provide you with the steps to make your product more accessible. We provide you with the steps to make your product more accessible.</p>
                            <p>We provide you with the steps to make your product. We provide you with the steps to make your product more accessible.</p>
                        </div>
                        <div className="col col-lg-3">
                            <img src="images/33.jpg" alt="profile"/>
                            <h3>Brax Yurie</h3>
                            <p>We provide you with the steps to make your product more accessible. We provide you with the steps to make your product more accessible.</p>
                        </div>
                        <div className="col col-lg-3">
                            <img src="images/51.jpg" alt="profile"/>
                            <h3>Tiny Tina</h3>
                            <p>We provide you with the steps to make your product more accessible. We provide you with the steps to make your product more accessible.</p>
                        </div>
                    </div>
                </div>
                <div className="container workplace">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12">
                            <img src="images/workplace.jpg" alt="workplace"/>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <h2 className="display-4">Trusted by organizations everywhere</h2>
                            <p>We've helped companies from all over the world make their web applications accessible.</p>
                            <a href="" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
                
                <div className="container gallery text-center">
                    <div className="row">
                        <div className="col-log-4 col-sm-12">
                            <img src="http://via.placeholder.com/300x300" alt="gallery"/>
                            <img src="http://via.placeholder.com/300x300" alt="gallery"/>
                            <img src="http://via.placeholder.com/300x300" alt="gallery"/>
                        </div>
                        <div className="col-log-4 col-sm-12">
                            <img src="http://via.placeholder.com/300x300" alt="gallery"/>
                            <img src="http://via.placeholder.com/300x300" alt="gallery"/>
                            <img src="http://via.placeholder.com/300x300" alt="gallery"/>
                        </div>
                        <div className="col-log-4 col-sm-12">
                            <img src="http://via.placeholder.com/300x300" alt="gallery"/>
                            <img src="http://via.placeholder.com/300x300" alt="gallery"/>
                            <img src="http://via.placeholder.com/300x300" alt="gallery"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
