import React from 'react';
import './Heroes.css';

function Heroes(props) {
    const {id, name, status, species, gender, image} = props;
    return (
        <div className='wrap_heroes'>
            <h2>ID: {id}</h2>
            <h2>Name: {name}</h2>
            <h3>Status: {status}</h3>
            <h3>Species: {species}</h3>
            <h3>Gender: {gender}</h3>
            <img src={image} alt="img"/>
        </div>
    )
}

export default Heroes;

