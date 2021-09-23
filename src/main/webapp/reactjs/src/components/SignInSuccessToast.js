import React, {Component} from "react";
import {Toast} from "react-bootstrap";

export default class SignInSuccessToast extends Component {

    render() {
        return (
            <div>
                <Toast>
                    <Toast.Header className={"bg-success text-white"}>

                    </Toast.Header>
                    <Toast.Body>

                    </Toast.Body>
                </Toast>
            </div>
        )
    }
}
