import React, {Component} from "react";
import {Container, Navbar, DropdownButton, Dropdown, NavDropdown, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import RaiseHandButton from "./RaiseHandButton";

export default function navigationBar() {

        return (
            <Navbar bg="dark" variant={"dark"} expand="lg">
                <Container>
                    <DropdownButton id="dropdown-basic-button" title="Actions">
                        <Dropdown.Item><RaiseHandButton/></Dropdown.Item>
                    </DropdownButton>
                    <Link to={"/classroom"} className="navbar-brand">
                        Welcome to the Classroom
                    </Link>
                    <NavDropdown title={"Username"} id="nav-dropdown">
                        <Button className="nav dropdown-item"  href="/"/*onClick={this.deleteMember}*/>
                            Log Out
                        </Button>
                    </NavDropdown>
                </Container>
            </Navbar>
        )
}