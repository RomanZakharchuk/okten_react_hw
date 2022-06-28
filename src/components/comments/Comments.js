import './Comments.css';
import Comment from "../comment";

const Comments = ({posts}) => {
    return (
        <div>
            <h2>Show all comments:</h2>
            <div>
                {
                    posts.map((value, index) => <Comment
                        key={index}
                        item={value}
                    />)
                }
            </div>
        </div>
    )
}

export default Comments