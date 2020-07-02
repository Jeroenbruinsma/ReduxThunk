export const reduxCountries = (reduxStore) => {
    return reduxStore.countries
}

export const reduxTenCountries = (reduxStore) => {
    console.log("6. inside the selector ")
    const countries = reduxStore.countries
    countries.length = 10
    return countries
}