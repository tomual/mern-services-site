import React, { Component } from 'react';

class Thankyou extends Component {
    render() {
        return (
            <div>
                <div className="container thankyou">
                    <div className="row">
                        <div className="col">
                            <h1>Thank you!</h1>
                            <p>Thank you for reaching out to us. We will get back to you in 1 - 2 business days.</p>
                            <a href="/" className="btn btn-primary">Back to Home</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Thankyou;