import React, {Component} from "react";
import {Card, Table} from "react-bootstrap";
import NavigationBar from "./NavigationBar";

export default class MembersTable extends Component{
    render() {
        return (
            <Card className="border border-dark bg-dark text-white">
                <Card.Header><NavigationBar/> </Card.Header>
                <Card.Body>
                <Table bordered hover striped variant="dark" size="sm">
                    <thead >
                    <tr align="center">
                        <th>#</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody align="center">
                    <tr>
                        <td>1</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </Table>
                </Card.Body>
            </Card>

        )
    }
}