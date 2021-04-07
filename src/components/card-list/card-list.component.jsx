import React from 'react'
import './card-list.styles.css'
import Cards from '../cards/cards.component'

export default function CardList(props) {
    return (
        <div className='card-list'>
            {
                props.monsters.map(monster =>
                    <Cards key={monster.id} monster={monster}/>)
            }
        </div>
    )
}
