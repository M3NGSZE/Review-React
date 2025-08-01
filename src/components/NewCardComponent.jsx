import React, { useEffect, useState } from 'react'

export default function NewCardComponent() {

    const [count, setCount] = useState(0)
    const [email, setEmail] = useState('') 
    const [emailError, setEmailError] = useState('')

    useEffect(() => {
        // console.log("component mounted")
        // document.title = `Count ${count} times`
        // fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => console.log(data))
    }, [count])

    useEffect(() => {
        if(email.includes('@') && email.includes('.')){
            // console.log('email is valid')
            setEmailError('')
        }else{
            setEmailError('Invalid Email')
        }
    }, [email])

    const handleChange = (e) =>{
        setEmail(e.target.value)
    }

    return (
        <div>
            <h1 className='text-4xl text-center'>{email}</h1>
            <p className='text-center text-red-500'>{emailError}</p>
            <button className='w-36 mx-auto block bg-red-800 p-4 rounded-lg' onClick={()=>{setCount(count + 1)}}>Increment: +1</button>

            <form action="">
                <label htmlFor="">Email</label>
                <input type="email" onChange={(e) => handleChange(e)}/>
            </form>
        </div>
    )
}
