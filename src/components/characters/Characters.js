import React from 'react';
import './Characters.css';

function Characters(props) {
    const {name, surname, age, info, photo} = props;
    return (
        <div className='wrap_characters'>
            <h2>{name}</h2>
            <h3>{surname}</h3>
            <h3>Age: {age}</h3>
            <p>{info}</p>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={photo} alt="image"/>
        </div>
    )
}

export default Characters;