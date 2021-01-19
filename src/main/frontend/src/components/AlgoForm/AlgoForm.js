import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function AlgoForm() {
    return (
        <Form onSubmit>
            <Form.Group controlId="formAlgoName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter algorithm name" />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>
            <Form.Group controlId="formAlgoDesc">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter algorithm description" />
            </Form.Group>

            <Form.Group controlId="formAlgoComplexity">
                <Form.Label>Complexity</Form.Label>
                <Form.Control type="text" placeholder="Enter algorithm compelexity" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
       </Form>
    )
}