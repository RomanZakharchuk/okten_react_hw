import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import './Comments.css';
import ApiService from "../../services";
import CommentComponents from "../../componets/commentComponents";

const Comments = () => {
    const apiService = new ApiService('comments');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        apiService.getAllData().then(value => setComments(value));
    }, []);

    return (
        <div>
            <div>
                <h2>All comments:</h2>
            </div>
            <div className='content'>
                <div className='left'>
                    {comments.map(comment => <CommentComponents
                        key={comment.id}
                        item={comment}
                    />)}
                </div>
                <div className='right'>
                    <Outlet/>
                </div>

            </div>
        </div>
    )
}

export default Comments;