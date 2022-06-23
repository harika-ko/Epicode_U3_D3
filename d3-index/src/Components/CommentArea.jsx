import { Component } from "react"
import CommentList from "./CommentList"


let options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2U2MjdmZmQ0OTAwMTU4YTdhOWIiLCJpYXQiOjE2NTU5ODM0OTksImV4cCI6MTY1NzE5MzA5OX0.FVezzfR-MwArRrxMi8U3lRh44jeNrRDlY6_z6TeJKIw",
    },
};


class CommentArea extends Component {

    componentDidMount = () => {
        console.log(this.props.asin)
        this.getCommentsData();
    }

    state = {
        comments: []
    }

    getCommentsData = async () => {
        try {

            const url = ("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin)
            const response = await fetch(url, options)

            let arrayResponse = await response.json()

            if (response.ok) {
                this.setState({ comments: arrayResponse })
            } else {
                alert("Something went wrong with API")
            }

        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <h3>Comments Data</h3>
                {this.state.comments && this.state.comments.length > 0 && <CommentList commentArray={this.state.comments} />}
            </div>
        )
    }
}

export default CommentArea