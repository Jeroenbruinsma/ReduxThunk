import React, {  useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {  reduxTenCountries } from '../store/countries/selectors'
import { fetchCountries } from '../store/countries/actions'
import { userLoggedIn } from '../store/user/selectors'
import { Redirect } from 'react-router-dom'

export default function Countries() {
    const countriesListStore = useSelector(reduxTenCountries)  
    const loggedIn = useSelector(userLoggedIn)  
    const dispatch = useDispatch()

    useEffect(()=> {
        console.log("2. useEffect fires")
        dispatch(  fetchCountries()  )
    },[dispatch])

    console.log("1||7. The countries Comp. gets redenderd",countriesListStore)

    console.log("am I logged in?", loggedIn)
    if(!loggedIn ) return <Redirect to="/login" />

    return (
        <div className="countryHolder">
            <button onClick={e=> dispatch({type: "RESET_COUNTRIES"}) }>RESET</button>    
            {countriesListStore.map( (countryCard,i) => {
                return <div className="countryCard" key={i}> 
                    <h1> {countryCard.name}</h1>
                    <p><b>Population</b>: {countryCard.population /1000000} M </p>
                    <p><b>Area</b>: {countryCard.area}</p>
                </div>
            })}
        </div>
    )
}
