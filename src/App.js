import React from 'react';
import './App.css';
import Heroes from "./components/heroes/Heroes";

function App() {
    return (
        <div className="App">
            <Heroes
                id={'1'}
                name={'Rick Sanchez'}
                status={'Alive'}
                species={'Human'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
            />

            <Heroes
                id={'2'}
                name={'Morty Smith'}
                status={'Alive'}
                species={'Human'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}
            />

            <Heroes
                id={'3'}
                name={'Summer Smith'}
                status={'Alive'}
                species={'Human'}
                gender={'Female'}
                image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}
            />

            <Heroes
                id={'4'}
                name={'Beth Smith'}
                status={'Alive'}
                species={'Human'}
                gender={'Female'}
                image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}
            />

            <Heroes
                id={'5'}
                name={'Jerry Smith'}
                status={'Alive'}
                species={'Human'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}
            />

            <Heroes
                id={'6'}
                name={'Abadango Cluster Princess'}
                status={'Alive'}
                species={'Alien'}
                gender={'Female'}
                image={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}
            />
        </div>
    );
}

export default App;
