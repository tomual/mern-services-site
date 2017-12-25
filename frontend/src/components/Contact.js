import React, { Component } from 'react';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            dropdown: 'Sales inquiry',
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value= target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {

        this.props.onSubmit(this.state);

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>Contact</h1>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Email address</label>
                                    <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dropdown">What can we help you with?</label>
                                    <select className="form-control" name="dropdown" value={this.state.dropdown} onChange={this.handleChange}>
                                        <option>Sales inquiry</option>
                                        <option>Quote request</option>
                                        <option>Service registration</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control" name="message" rows="5" value={this.state.message} onChange={this.handleChange} />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;