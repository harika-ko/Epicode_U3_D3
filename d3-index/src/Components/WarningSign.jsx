import { Component } from "react";
import { Alert } from "react-bootstrap";

class WarningSign extends Component {
    render() {
        return (
            <div class="alert-class">
                <Alert variant="danger">
                    {this.props.alertText}
                </Alert>
            </div>
        )
    }
}

export default WarningSign;