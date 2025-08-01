import React, { useState } from 'react'

export default function NewCardComponent() {

    const [count, setCount] = useState(0)

    return (
        <div>
            <h1 className='text-4xl text-center'>{count}</h1>
            <button className='w-36 mx-auto block bg-red-800 p-4 rounded-lg' onClick={()=>{setCount(count + 1)}}>Increment: +1</button>
        </div>
    )
}
