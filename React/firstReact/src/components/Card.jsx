import React from 'react'
import "./Card.css"

const Card = (props) => {
    return (
        <div className='card'>
            <img style = {{height: '200px'}} src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg" alt="" />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Card
