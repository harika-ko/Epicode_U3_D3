import { Component } from "react";
import SingleComment from "./SingleComment";


class CommentList extends Component {
    render() {
        return (
            <div>
                {this.props.commentArray && this.props.commentArray.length > 0 && this.props.commentArray.map(comment =>
                    < SingleComment commentData={comment} />)}
            </div>

        )
    }
}

export default CommentList