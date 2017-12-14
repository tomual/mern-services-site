import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="jumbotron">
                        <h1 className="display-1">Make it Accessible</h1>
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
                <div className="container trusted text-center">
                    <div className="row">
                        <div className="col">
                            <h2 className="display-2">Trusted by organizations everywhere</h2>
                            <p>We've helped companies from all over the world make their web applications accessible.</p>
                            <a href="" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="container video text-center">
                    <div className="row">
                        <div className="col">
                            <h2 className="display-2">Watch how it happens</h2>
                            <p>Here's what you can expect from our services.</p>
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

export default Home;

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