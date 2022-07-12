import React, {Component} from 'react';

import {ApiService} from "../services/api.service";
import PostComponent from "../components/PostComponent";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {posts: []};
    }

    componentDidMount() {
        this.apiService = new ApiService();
        this.apiService.getPosts('posts').then(value => this.setState({posts: value}))
    }

    render() {
        const {posts} = this.state;

        return (
            <div>
                {posts.map(post => <PostComponent
                    key={post.id}
                    item={post}
                />)}
            </div>
        );
    }
}

export default Posts;