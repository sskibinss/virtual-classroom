import React, {Component} from "react";
import {Card, Table} from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandSpock} from "@fortawesome/free-solid-svg-icons";

export default class MembersTable extends Component{

    constructor(props) {
        super(props);
        this.state = {
            members : []
        };
        this.state.show = true;
    }

    componentDidMount() {
        this.findAllMembers();
    }

    findAllMembers() {
        axios.get("http://localhost:8080/members/classroom")
            .then(response => response.data)
            .then((data) => {
                this.setState({members: data})
            });
    }

    render() {
        return (
            <Card style={{width: '35rem'}} className="m-auto mt-sm-4 border border-dark bg-dark text-white">
                <Card.Header><NavigationBar/> </Card.Header>
                <Card.Body>
                <Table bordered hover striped variant="dark" size="sm">
                    <thead >
                    <tr align="center">
                        <th colSpan={2}>Members</th>
                    </tr>
                    </thead>
                    <tbody style={{offset: 2}} className="text-capitalize">
                    {this.state.members.map((member) => (
                        <tr key={member.id}>
                            <td>{member.name}</td>
                            <td className={"text-end text-center borderless"}> <FontAwesomeIcon style={{"display": member.handRaised ? "block" : "none"}} icon={faHandSpock}/> </td>
                        </tr>
                    ))
                    }
                    </tbody>
                </Table>
                </Card.Body>
            </Card>

        )
    }
}