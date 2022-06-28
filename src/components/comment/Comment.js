import './Comment.css';

const Comment = ({item}) => {
    return (
        <div>
            <p>{item.id}: {item.body}</p>
        </div>
    )
}

export default Comment;