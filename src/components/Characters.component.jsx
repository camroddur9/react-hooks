import React, { useState, useEffect, useReducer, useMemo, useRef, useCallback } from 'react'

import Search from './Search.component'

const initialState = {
    favorites : []
}

const favoritesReducer = (state, action) => {
    switch (action.type){
        case 'ADD_TO_FAVORITE': 
            return{
                ...state,
                favorites: [...state.favorites , action.payload]
            }
        default:
            return state;
    }
}

const Characters = () => {

    const [characters, setCharacters] = useState([])
    const [favorites, dispatch] = useReducer(favoritesReducer, initialState);
    const [search, setSearch ] = useState('');
    const searchInput = useRef(null)

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => 
            setCharacters(data.results)
        );

    }, []);

    const handleClick = (favorite) => {
        dispatch({type: "ADD_TO_FAVORITE", payload: favorite})
    }

    /*const HandleSearch = () => {
        setSearch(searchInput.current.value)
    }*/

    const HandleSearch = useCallback(() => 
        setSearch(searchInput.current.value), []
    )

    /*const filteredUsers = characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase())
    })*/

    const filteredUsers = useMemo(() => 
        characters.filter((user) => {
            return user.name.toLowerCase().includes(search.toLowerCase())
        }), [characters, search]
    )

    return (
        <div className='Characters'>
            {
                favorites.favorites.map((favorite) => 
                    <li key={favorite.id}>
                        {favorite}
                    </li>
                )
            }

            <Search 
                search={search}
                searchInput={searchInput}
                HandleSearch = {HandleSearch}
            />

            {
            filteredUsers.map((characters, index) => 
                <div className='item' key={characters.id}>
                    <h2 >{characters.name}</h2>
                    <button type="button" onClick={() => {handleClick(characters.name)}}>Agregar a favoritos</button>

                </div>
            )}
        </div>
    )
}

export default Characters