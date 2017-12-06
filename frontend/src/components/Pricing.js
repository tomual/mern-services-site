import React, { Component } from 'react';
import { PageHeader, Panel } from 'react-bootstrap';

class Pricing extends Component {
    render() {
        return (
            <div>
                <PageHeader>Pricing</PageHeader>
                {panelsInstance}
            </div>
        );
    }
}

const title = (
    <h3>Panel title</h3>
);

const panelsInstance = (
    <div>
        <Panel header="Panel heading without title">
            Panel content
        </Panel>
        <Panel header={title}>
            Panel content
        </Panel>
    </div>
);

export default Pricing;
