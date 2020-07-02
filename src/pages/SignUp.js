import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUp } from '../store/user/actions'

export default function SignUp() {

    const [ firstName , set_firstName ] = useState("")    
    const [ email ,     set_email ] = useState("")
    const [ password ,  set_password ] = useState("")

    const dispatch = useDispatch()

    const signUpHandler = (event) => {
        event.preventDefault()
        dispatch( signUp(firstName, email, password))
    }

    return (
        <div>
                <form onSubmit={signUpHandler}>
                    <input placeholder="FirstName" value={firstName} onChange={e => set_firstName(e.target.value) } />
                    <input placeholder="Email"     value={email} onChange={e => set_email(e.target.value)}     />
                    <input placeholder="password"  value={password} onChange={e => set_password(e.target.value)}  />
                    <button type="submit">SignUp</button>
                </form>

        </div>
    )
}
