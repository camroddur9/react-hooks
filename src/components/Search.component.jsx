import React from 'react'

const Search = ({search, searchInput, HandleSearch}) => {
    return (
        <div className="Search">
            <input type='text' value={search} ref={searchInput} onChange = {() => {HandleSearch()}}/>
        </div>
    )
}

export default Search