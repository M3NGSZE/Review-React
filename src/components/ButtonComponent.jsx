import React from 'react'

export default function ButtonComponent(props) {
    // console.log("button props",props)

    const defaultStyle = "p-4 bg-blue-800 h-36 w-36 font-medium text-white rounded-xl text-2xl"
    return (
        <button onClick={props.onClick} className={props?.className || defaultStyle}>
            {props?.title || "Click Here"}
        </button>
    )
}

// const styles = {
//     button : {
//         fontSize: '2rem',
//         color: 'white'
//     },
//     img : {
//         width: '100px',
//         height: '100px',
//         backgroundColor: 'red'
//     }
// }