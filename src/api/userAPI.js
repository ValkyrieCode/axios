import { API } from "../config"

export const register = (username,email,password) =>{
    return fetch(`${API}/register`,{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({username,email,password})
    })
    // .then(response => response.json())
    .then(response=>{return response.json()})
    .catch(error=>console.log(error))
}

export const verifyEmail = (token) =>{
    return fetch(`${API}/verifyEMail/${token}`)
    .then(res=>res.json())
    .catch(err => console.log(err))
}



export const login = (email, password) => {
    let user = {email, password}
    return fetch(`${API}/signin`,{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .catch(err=> console.log(err))
}

export const authenticate = data => {
    localStorage.setItem('jwt',JSON.stringify(data))
}

export const isAuthenticated = () =>{
    return localStorage.getItem('jwt')? JSON.parse(localStorage.getItem('jwt')) :false



}