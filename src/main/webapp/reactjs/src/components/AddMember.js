import React, {Component} from "react";
import {Card, Form, Button} from "react-bootstrap";
import axios from "axios";

export default class AddMember extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.submitMember = this.submitMember.bind(this);
        this.memberChange = this.memberChange.bind(this);
    }

    submitMember = event => {
        event.preventDefault();
        const member = {
            name: this.state.name
        }

        axios.post("http://localhost:8080/members/new-member", member)
            .then(response => {
                if(response.data != null) {
                    this.setState(this.initialState)
                    this.props.history.push("/classroom")
                }
            })
    }

    initialState = {
        name: ''
    }

    memberChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render() {
        const {name} = this.state;
        return (
            <Card style={{width: '18rem'}}
                  className="m-auto mt-lg-5 border border-dark bg-dark text-white text-center ">
                <Card.Header>Login to the class</Card.Header>
                <Card.Body>
                    <Form onSubmit={this.submitMember} id={"memberFormId"}>
                        <Form.Group className="mb-3" controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required autoComplete="off"
                                type="test" name="name"
                                value={name} onChange={this.memberChange}
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