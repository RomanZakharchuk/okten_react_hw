import './AlbumComponent.css';

const AlbumComponent = ({item}) => {
    const {id, title} = item;

    return (
        <div>
            <div>
                {id}: {title}
            </div>
        </div>
    )
}

export default AlbumComponent;