import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import './PostsComponent.css';
import ApiService from "../../services";
import PostComponent from "../postComponent";

const PostsComponent = () => {
    const {id} = useParams();
    const [posts, setPosts] = useState([]);
    const apiService = new ApiService(`posts/${id}`);

    useEffect(() => {
            apiService.getAllData().then(value => setPosts([value]));

    }, [id]);

    return (
        <div>
            {posts.map(post => <PostComponent
                key={post.id}
                item={post}
            />)}
        </div>
    )
}

export default PostsComponent;