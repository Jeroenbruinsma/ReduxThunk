import Axios from "axios"

export const fetchedCountries = (data) => {
    return {type: "FETCH_COUNTRIES", payload: data}
}

export const fetchCountries = () => {
    return  async (dispatch, getState) => {
        const url = "https://restcountries.eu/rest/v2/all"
        const response =  await Axios.get(url)
        console.log("3. get the data")
        dispatch( fetchedCountries( response.data ))
    }
}



