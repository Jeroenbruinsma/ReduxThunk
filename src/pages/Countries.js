import React, { useState, useEffect } from 'react'
import Axios from "axios"

export default function Countries() {
    const url = "https://restcountries.eu/rest/v2/all"
    const [countries, set_countries] = useState([]) 

    const fetchCountries = async (url) => {
        const response =  await Axios.get(url)
        console.log("response", response.data)
        set_countries(response.data)
    }
    useEffect(()=> {
        fetchCountries(url)
    },[url])


    return (
        <div className="countryHolder">
            {countries.map( countryCard => {
                return <div className="countryCard"> 
                    <h1> {countryCard.name}</h1>
                    <p><b>Population</b>: {countryCard.population /1000000} M </p>
                    <p><b>Area</b>: {countryCard.area}</p>
                </div>
            })}
        </div>
    )
}
