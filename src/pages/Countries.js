import React, {  useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {  reduxTenCountries } from '../store/countries/selectors'
import { fetchCountries } from '../store/countries/actions'

export default function Countries() {
    const countriesListStore = useSelector(reduxTenCountries)    
    const dispatch = useDispatch()

    useEffect(()=> {
        console.log("2. useEffect fires")
        dispatch(  fetchCountries()  )
    },[dispatch])

    console.log("1||7. The countries Comp. gets redenderd",countriesListStore)
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
