import { Component } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import SingleBook from "./SingleBook"

class FilterBookList extends Component {
    state = {
        searchQuery: " "
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>

                        <Form.Group>
                            <Form.Label>Search</Form.Label>
                            <Form.Control type="text" placeholder="Search here"
                                value={this.state.searchQuery} onChange={
                                    e => this.setState({ searchQuery: e.target.value })
                                } />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    {
                        this.props.book.filter(selectedBook => selectedBook.title.toLowerCase().includes(this.state.searchQuery)).map(selectedBook => (
                            <Col key={selectedBook.asin}>
                                <SingleBook book={selectedBook} />
                            </Col>
                        ))
                    }

                </Row>
            </Container>
        )
    }
}

export default FilterBookList