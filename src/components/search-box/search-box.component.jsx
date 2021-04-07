import React from 'react'
import './search-box.styles.css'

function searchBox(props) {
    return (
        <div>
            <input className="search" typy="search" placeholder={props.placeholder} onChange={props.changeHandler}/>
        </div>
    )
}


export default searchBox