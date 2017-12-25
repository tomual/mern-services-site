import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
import LeadForm from './LeadForm';

class Home extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
    }

    openModal() {
        this.setState({isOpen: true});
    }

    handleEmailSubmit(email) {
        this.props.sendToContact(email);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="jumbotron">
                        <h1 className="display-1">Make it Accessible</h1>
                        <p className="lead">We'll help your web application easy to read for a wider variety of people</p>
                        <LeadForm handleEmailSubmit={this.handleEmailSubmit} />
                    </div>
                </div>
                <div className="blue">
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
                </div>
                <div className="container trusted text-center">
                    <div className="row">
                        <div className="col">
                            <h2 className="display-2">Trusted by organizations everywhere</h2>
                            <p>We've helped companies from all over the world make their web applications accessible.</p>
                            <a href="" className="btn btn-primary">Learn More</a>

                            <div className="row logos">
                                <div className="col">
                                    <img src="images/logo-1.svg" alt="logo"/>
                                </div>
                                <div className="col">
                                    <img src="images/logo-2.svg" alt="logo"/>
                                </div>
                                <div className="col">
                                    <img src="images/logo-3.svg" alt="logo"/>
                                </div>
                                <div className="col">
                                    <img src="images/logo-4.svg" alt="logo"/>
                                </div>
                            </div>
                            <div className="row logos">
                                <div className="col">
                                    <img src="images/logo-8.svg" alt="logo"/>
                                </div>
                                <div className="col">
                                    <img src="images/logo-5.svg" alt="logo"/>
                                </div>
                                <div className="col">
                                    <img src="images/logo-6.svg" alt="logo"/>
                                </div>
                                <div className="col">
                                    <img src="images/logo-7.svg" alt="logo"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="purple">
                    <div className="container video text-center">
                        <div className="row">
                            <div className="col">
                                <h2 className="display-2">Watch how it happens</h2>
                                <p>Here's what you can expect from our services.</p>
                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                                <button className="play-video" onClick={this.openModal}><span className="glyphicon glyphicon-play" aria-hidden="true"></span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container try text-center">
                    <div className="row">
                        <div className="col">
                            <h2 className="display-2">Try us out today</h2>
                            <p>No matter how small or large your application, we can help!</p>
                            <LeadForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;