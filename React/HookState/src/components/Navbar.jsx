import React, { useEffect } from 'react'

function Navbar(props) {
    useEffect(() => {
        alert("Triggers every time this component is rendered")
    })
    useEffect(() => {
        alert("Triggers only first time this component is rendered")
        return () => {
            alert("This return function is triggererd whenvever this component is unmounted")
        }
    }, [])
    useEffect(() => {
        alert("Triggers every time the title is changed")
    }, [props.title])
    return (
        <div>
            Hello this is navbar of title {props.title}
        </div>
    )
}

export default Navbar
