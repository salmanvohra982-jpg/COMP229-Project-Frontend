/* 
    File: api-user.js
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Contains login, registration, and profile-fetching API requests for user authentication and account operations.
    Date: November 23 2025
*/



let apiURL = import.meta.env.VITE_APP_APIURL

const signin = async (user) => {
    try {
        let response = await fetch(apiURL + '/auth/signin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const create = async (user) => {
    try {
        let response = await fetch(apiURL + '/api/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

export { signin, create }