import { Component } from "react"
import { Card } from "react-bootstrap"


class SingleBook extends Component {

    state = {
        selected: false
    }

    render() {
        return (

            <div className="single-book">
                <Card key={this.props.book.asin}>
                    <Card.Img className="single-image" src={this.props.book.img} style={{ width: "250px" }} />
                    <Card.Body>
                        <Card.Title>{this.props.book.title}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default SingleBook