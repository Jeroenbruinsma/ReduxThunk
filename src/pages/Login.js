import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, getProfile } from '../store/user/actions'
import { Redirect } from 'react-router-dom'

export default function Login() {

    const [ email ,     set_email ] = useState("")
    const [ password ,  set_password ] = useState("")

    const dispatch = useDispatch()
    const redirect = useSelector(reduxStore => reduxStore.user.redirect)

    const signUpHandler = (event) => {
        event.preventDefault()
        dispatch( login( email, password))
    }

    useEffect(()=> {
        console.log("what is my token???", localStorage.getItem("jwt"))
        dispatch(getProfile(localStorage.getItem("jwt")))
    },[])

    console.log("do i need to redirect the user?", redirect)

    
    return (
        <div>
        {redirect ? <Redirect to="/profile"/> : null}
            <h3>Login</h3>
                <form onSubmit={signUpHandler}>
                    <input placeholder="Email"     value={email} onChange={e => set_email(e.target.value)}     />
                    <input placeholder="password"  value={password} onChange={e => set_password(e.target.value)}  />
                    <button type="submit">SignUp</button>
                </form>

                <button onClick={ e=> dispatch(getProfile()) }> getProfile </button>

        </div>
    )
}
