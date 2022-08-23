import React, { useState, useEffect, useReducer, useMemo, useRef } from 'react'

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

    const HandleSearch = () => {
        setSearch(searchInput.current.value)
    }

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

            <div className="Search">
                <input type='text' value={search} ref={searchInput} onChange = {() => {HandleSearch()}}/>
            </div>

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