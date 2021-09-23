import React, {Component} from "react";
import {Card, Table} from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandSpock} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";


export default class MembersTable extends Component{

    constructor(props) {
        super(props);
        this.state = {
            members : []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8080/members/classroom")
            .then(response => console.log(response.data));
    }

    render() {
        return (
            <Card style={{width: '35rem'}} className="m-auto mt-sm-4 border border-dark bg-dark text-white">
                <Card.Header><NavigationBar/> </Card.Header>
                <Card.Body>
                <Table bordered hover striped variant="dark" size="sm">
                    <thead >
                    <tr align="center">

                        <th>Member Name</th>
                    </tr>
                    </thead>
                    <tbody style={{offset: 2}} className="text-capitalize">
                    <tr>
                        <td>@mdo <FontAwesomeIcon icon={faHandSpock}/></td>
                    </tr>
                    <tr>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </Table>
                </Card.Body>
            </Card>

        )
    }
}