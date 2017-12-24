import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="jumbotron">
                        <h1 className="display-1">Service One Header</h1>
                        <p className="lead">We'll help your web application easy to read for a wider variety of people</p>
                        {leadInput}
                    </div>
                </div>
                <div className="container screenie">
                    <div className="row">
                        <div className="col">
                        </div>
                        <div className="col">
                            <h2 className="display-2">We'll help you get to more people</h2>
                            <p>We provide you with the steps to make your product more accessible.</p>
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
                <div className="container features">
                    <div className="row text-center">
                        <div className="col">
                            <h2 className="display-2">Here are the features</h2>
                            <p>Here's what you can expect from our services.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                            <p>Some words about this specific feature. There's an icon that goes above it.</p>
                            <a href="/">Learn More</a>
                        </div>
                        <div className="col">
                            <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
                            <p>Some words about this specific feature. There's an icon that goes above it.</p>
                            <a href="/">Learn More</a>
                        </div>
                        <div className="col">
                            <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                            <p>Some words about this specific feature. There's an icon that goes above it.</p>
                            <a href="/">Learn More</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <span class="glyphicon glyphicon-signal" aria-hidden="true"></span>
                            <p>Some words about this specific feature. There's an icon that goes above it.</p>
                            <a href="/">Learn More</a>
                        </div>
                        <div className="col">
                            <span class="glyphicon glyphicon-flag" aria-hidden="true"></span>
                            <p>Some words about this specific feature. There's an icon that goes above it.</p>
                            <a href="/">Learn More</a>
                        </div>
                        <div className="col">
                            <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                            <p>Some words about this specific feature. There's an icon that goes above it.</p>
                            <a href="/">Learn More</a>
                        </div>
                    </div>

                </div>
                <div className="container try text-center">
                    <div className="row">
                        <div className="col">
                            <h2 className="display-2">Try us out today</h2>
                            <p>No matter how small or large your application, we can help!</p>
                            {leadInput}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;

const leadInput = (
    <form>
        <div className="form-row align-items-center">
            <div >
                <label className="sr-only" htmlFor="inlineFormInputName">Name</label>
                <input type="text" className="form-control mb-2 mb-sm-0" id="inlineFormInputName" placeholder="name@email.com" />
            </div>
            <div>
                <button type="submit" className="btn btn-primary">Get Started</button>
            </div>
        </div>
    </form>
);