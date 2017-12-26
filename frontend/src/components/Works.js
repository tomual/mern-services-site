import React, { Component } from 'react';
import LeadForm from './LeadForm';

class Works extends Component {
 
    constructor(props) {
        super(props);
        this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
    }

    handleEmailSubmit(email) {
        this.props.sendToContact(email);
    }

    render() {
        return (
            <div>
                <div className="container works-hero text-center">
                    <div className="row">
                        <div className="col">
                            <h1 className="display-2">Here are our works</h1>
                            <p>We provide you with the steps to make your product more accessible.</p>
                            <a href="" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="work work-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <h2 className="display-4">Northwest Computing Hosting Dashboard</h2>
                                <p>We've helped companies from all over the world make their web applications accessible.</p>
                                <a href="" className="btn btn-outline-light">Visit Site</a>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <img src="images/work1.jpg" alt="screenshot"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="work work-two">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <h2 className="display-4">G.E. Works Promotional Landing Page</h2>
                                <p>We've helped companies from all over the world make their web applications accessible.</p>
                                <a href="" className="btn btn-outline-light">Visit Site</a>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <img src="images/work2.jpg" alt="screenshot"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="work work-three">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <h2 className="display-4">Association for the Blind Social Networking Site</h2>
                                <p>We've helped companies from all over the world make their web applications accessible.</p>
                                <a href="" className="btn btn-outline-light">Visit Site</a>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <img src="images/work3.jpg" alt="screenshot"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container try text-center">
                    <div className="row">
                        <div className="col">
                            <h2 className="display-2">Try us out today</h2>
                            <p>No matter how small or large your application, we can help!</p>
                            <LeadForm handleEmailSubmit={this.handleEmailSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Works;