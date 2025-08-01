import React from 'react'

export default function ButtonComponent() {
    return (
        <button style={{...styles.button, ...styles.img}}>
            Click Me
        </button>
    )
}

const styles = {
    button : {
        fontSize: '2rem',
        color: 'white'
    },
    img : {
        width: '100px',
        height: '100px',
        backgroundColor: 'red'
    }
}