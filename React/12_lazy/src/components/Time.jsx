import React, { useState, useEffect } from 'react';

const Time = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const some = []
        for (let i = 0; i < 30000; i++) {
            some.push(i);
        }
        setItems(some)

    }, [])

    return (
        <div>
            <ul>
                {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
        </div>
    );
};

export default Time;
