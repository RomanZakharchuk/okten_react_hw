import './PostComponent.css';

const PostComponent = ({item}) => {
    const {id, body} = item;

    return (
        <div>
            <div>
                {id}: {body}
            </div>
        </div>
    )
}

export default PostComponent;