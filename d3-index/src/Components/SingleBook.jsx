import { Component } from "react"
import { Card } from "react-bootstrap"
import CommentArea from "./CommentArea"


class SingleBook extends Component {

    state = {
        selected: false
    }

    render() {
        return (
            <div>
                <Card onClick={() => this.setState({ selected: !this.state.selected })}
                    key={this.props.book.asin} style={{ backgroundColor: this.state.selected ? "grey" : "white" }}>
                    <Card.Img className="single-image" src={this.props.book.img} style={{ width: "250px" }} />
                    <Card.Body>
                        <Card.Title>{this.props.book.title}</Card.Title>

                        {this.state.selected && <CommentArea asin={this.props.book.asin} />}
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default SingleBook