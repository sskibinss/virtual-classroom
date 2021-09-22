import React, {Component} from "react";
import {Card, Form, Button} from "react-bootstrap";

export default class AddMember extends Component{

    constructor(props) {
        super(props);
        this.state = {name:''};
    }

    render() {
        return (
            <Card style={{ width: '18rem'}} className="m-auto mt-lg-5 border border-dark bg-dark text-white text-center ">
                <Card.Header >Login to the class</Card.Header>
                <Card.Body>
                    <Form id={"memberFormId"}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="test" name="name" placeholder="Enter your name" />
                            <Form.Text className="text-muted">
                                Your name will be visible to the whole class
                            </Form.Text>
                        </Form.Group>

                        <Button href={"/classroom"} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        )
    }
}