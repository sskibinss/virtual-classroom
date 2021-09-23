import React, {Component} from "react";
import {Card, Form, Button} from "react-bootstrap";

export default class AddMember extends Component {

    constructor(props) {
        super(props);
        this.state = {name: ''};
        this.submitMember = this.submitMember.bind(this);
        this.memberChange = this.memberChange.bind(this);
    }

    submitMember(event) {
        alert("Name is " + this.state.name);
        event.preventDefault();
    }

    memberChange(event) {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render() {
        return (
            <Card style={{width: '18rem'}}
                  className="m-auto mt-lg-5 border border-dark bg-dark text-white text-center ">
                <Card.Header>Login to the class</Card.Header>
                <Card.Body>
                    <Form onSubmit={this.submitMember} id={"memberFormId"}>
                        <Form.Group className="mb-3" controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required
                                type="test" name="name"
                                value={this.state.name} onChange={this.memberChange}
                                placeholder="Enter your name"/>
                            <Form.Text className="text-muted">
                                Your name will be visible to the whole class
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        )
    }
}