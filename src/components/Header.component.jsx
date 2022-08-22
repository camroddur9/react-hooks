import React, { useState } from 'react'

const Header = () => {

    const [darkMode, setDarkmode] = useState(false);

    const handleClick = () => {
        setDarkmode(!darkMode) 
    }

    return(
        <div className="Header">
            <h1>ReactHooks</h1>
            <button type='button' onClick={() => {handleClick()}}>{darkMode ? "Dark Mode":"Light Mode"}</button>
        </div>
    )
}

export default Header