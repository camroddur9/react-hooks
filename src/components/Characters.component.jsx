import React, { useState, useEffect } from 'react'

const Characters = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setCharacters(data.results));
    }, []);

    return (
        <div className='Characters'>
            {
            characters.map((characters, index) => 
                <h2>{characters.name}</h2>
            )}
        </div>
    )
}

export default Characters