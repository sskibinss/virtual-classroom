import React, {Component} from "react";
import {Container, Navbar, DropdownButton, Dropdown, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import RaiseHandButton from "./RaiseHandButton";

export default class NavigationBar extends Component {

    render() {
        return (
            <Navbar bg="dark" variant={"dark"} expand="lg">
                <Container>
                    <DropdownButton id="dropdown-basic-button" title="Actions">
                        <Dropdown.Item><RaiseHandButton/></Dropdown.Item>
                    </DropdownButton>
                    <Link to={"/classroom"} className="navbar-brand">
                        Welcome to the Classroom
                    </Link>
                    <NavDropdown title="Username" id="nav-dropdown">
                        <Link to={"/logout"} className="nav dropdown-item">
                            Log Out
                        </Link>
                    </NavDropdown>
                </Container>
            </Navbar>
        )
    }
}