import './TodoComponent.css';

const TodoComponent = ({item}) => {
    const {id, title} = item;

    return (
        <div>
            <div>
                {id}: {title}
            </div>
        </div>
    )
}

export default TodoComponent;