import React, { Component } from 'react';
import { PageHeader, FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Button } from 'react-bootstrap';

class Contact extends Component {
    render() {
        return (
            <div>
                <PageHeader>Contact</PageHeader>
                {formInstance}
            </div>
        );
    }
}

export default Contact;

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}


const formInstance = (
    <form>
        <FieldGroup
            id="formControlsText"
            type="text"
            label="Text"
            placeholder="Enter text"
        />
        <FieldGroup
            id="formControlsEmail"
            type="email"
            label="Email address"
            placeholder="Enter email"
        />

        <Checkbox checked readOnly>
            Checkbox
        </Checkbox>

        <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Textarea</ControlLabel>
            <FormControl componentClass="textarea" placeholder="textarea" />
        </FormGroup>


        <Button type="submit">
            Submit
        </Button>
    </form>
);