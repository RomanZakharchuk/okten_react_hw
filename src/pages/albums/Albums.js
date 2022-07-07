import {useEffect, useState} from "react";

import './Albums.css';
import ApiService from "../../services";
import AlbumComponent from "../../componets/albumComponent";

const Albums = () => {
    const apiService = new ApiService('albums');
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        apiService.getAllData().then(value => setAlbums(value));
    }, []);

    return (
        <div>
            <div>
                <h2>Our Albums:</h2>
            </div>
            <div>
                {albums.map(album => <AlbumComponent
                    key={album.id}
                    item={album}
                />)}
            </div>
        </div>
    )
}

export default Albums;