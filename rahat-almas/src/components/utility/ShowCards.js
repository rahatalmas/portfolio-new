import React from 'react'
import '../utility/ShowCard.css'

const ShowCard = ({head,date,desc}) =>{
    return (
        <div className='show-card'>
            <h1 className='show-card-head'>{head}</h1>
            <p className='show-card-date'>{date}</p>
            <p className='show-card-desc'>{desc}</p>
        </div>
    );
}

export default ShowCard;