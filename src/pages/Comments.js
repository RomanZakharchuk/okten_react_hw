import React, {Component} from 'react';
import {ApiService} from "../services/api.service";
import CommentComponent from "../components/CommentComponent";

class Comments extends Component {
    state = {comments: []};

    componentDidMount() {
        this.apiService = new ApiService();
        this.apiService.getComments('comments').then(value => this.setState({comments: value}))
    }

    render() {
        const {comments} = this.state;

        return (
            <div>
                {comments.map(comment => <CommentComponent
                    key={comment.id}
                    item={comment}
                />)}
            </div>
        );
    }
}

export default Comments;