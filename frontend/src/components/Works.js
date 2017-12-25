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
                <div className="container screenie text-center">
                    <div className="row">
                        <div className="col">
                            <h1 className="display-2">Here are our works</h1>
                            <p>We provide you with the steps to make your product more accessible.</p>
                            <a href="" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="container trusted">
                    <div className="row">
                        <div className="col">
                            <h2 className="display-4">Trusted by organizations everywhere</h2>
                            <p>We've helped companies from all over the world make their web applications accessible.</p>
                            <a href="" className="btn btn-primary">Learn More</a>
                        </div>
                        <div className="col">
                        </div>
                    </div>
                </div>
                <div className="container trusted">
                    <div className="row">
                        <div className="col">
                            <h2 className="display-4">Trusted by organizations everywhere</h2>
                            <p>We've helped companies from all over the world make their web applications accessible.</p>
                            <a href="" className="btn btn-primary">Learn More</a>
                        </div>
                        <div className="col">
                        </div>
                    </div>
                </div>
                <div className="container trusted">
                    <div className="row">
                        <div className="col">
                            <h2 className="display-4">Trusted by organizations everywhere</h2>
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