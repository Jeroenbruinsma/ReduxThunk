import React, {  useEffect } from 'react'
import Axios from "axios"
import { useSelector, useDispatch } from 'react-redux'

export default function Countries() {
    const url = "https://restcountries.eu/rest/v2/all"

    const countriesListStore = useSelector(reduxStore => reduxStore.countries)    
    const dispatch = useDispatch()

    const fetchCountries = async (url) => {
        const response =  await Axios.get(url)
        dispatch({type: "FETCH_COUNTRIES", payload: response.data})

    }
    useEffect(()=> {
        fetchCountries(url)
    },[url])

    return (
        <div className="countryHolder">
            
            <button onClick={e=> dispatch({type: "RESET_COUNTRIES"}) }>RESET</button>    
            
            {countriesListStore.map( countryCard => {
                return <div className="countryCard"> 
                    <h1> {countryCard.name}</h1>
                    <p><b>Population</b>: {countryCard.population /1000000} M </p>
                    <p><b>Area</b>: {countryCard.area}</p>
                </div>
            })}
            
        </div>
    )
}
