export const userLoggedIn = (reduxStore) => {
    console.log("what is my reduxStore", reduxStore)
    if(reduxStore.user.jwt){
        return true
    }else{
        return false
    }
}