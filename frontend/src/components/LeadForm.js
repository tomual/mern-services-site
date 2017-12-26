import React, { Component } from 'react';

class LeadForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: ''
        };
        this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleEmailSubmit(event) {
        if(validateEmail(this.state.email)) {
            this.props.handleEmailSubmit(this.state.email);
        }        
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleEmailSubmit}>
                <div className="form-row align-items-center">
                    <div >
                        <label className="sr-only" htmlFor="inlineFormInputName">Name</label>
                        <input type="text" className="form-control mb-2 mb-sm-0" id="inlineFormInputName" placeholder="name@email.com" onChange={this.handleChange} />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default LeadForm;

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}