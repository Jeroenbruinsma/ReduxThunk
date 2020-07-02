import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login, getProfile } from '../store/user/actions'

export default function Login() {

    const [ email ,     set_email ] = useState("")
    const [ password ,  set_password ] = useState("")

    const dispatch = useDispatch()

    const signUpHandler = (event) => {
        event.preventDefault()
        // console.log("signupHandler", firstName , email , password)
        dispatch( login( email, password))
    }

    return (
        <div>
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
