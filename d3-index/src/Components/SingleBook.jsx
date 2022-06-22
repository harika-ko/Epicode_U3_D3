import { Card } from "react-bootstrap"


const SingleBook = (props) => (
    <div className="single-book">
        <Card key={props.book.asin}>
            <Card.Img className="single-image" src={props.book.img} style={{ width: "250px" }} />
            <Card.Body>
                <Card.Title>{props.book.title}</Card.Title>
            </Card.Body>
        </Card>
    </div>
);

export default SingleBook