import {Link} from "react-router-dom";

import './CommentComponents.css';

const CommentComponents = ({item}) => {
    const {id, postId, name, email, body} = item;

    return (
        <div>
            <div className='comment_box'>
                <p>{id}: {name}</p>
                <p>{email}</p>
                <p>{body}</p>
                <span><Link to={postId.toString()}>Show posts</Link></span>
            </div>
        </div>
    )
}

export default CommentComponents;