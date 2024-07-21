import React from 'react'
import { useState, useEffect } from 'react'
import './card.css'

const Cardcontainer = () => {
    const [cards, setcards] = useState([])
    useEffect(() => {
            const getdata = async () => {
            let api = await fetch('https://jsonplaceholder.typicode.com/posts')
            let data = await api.json();
            setcards(data)
        }
        getdata()
    }, []);
    
    return (
        <div className='cardContainer'>
            {
                cards.map((item) => {
                    return (

                        <div key={item.id} className='card'>
                            <p className='title'>{item.title}</p>
                            <div className="ids">
                                <span>{"User id: " + item.userId}</span>
                                <span>{"id: " + item.id}</span>
                            </div>
                            <div className="body">
                                {item.body}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cardcontainer
