import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { register } from '../api/userAPI'

const Register = () => {
    let [username, setUsername] = useState('')
    let [email, setEmail ] = useState('')
    let [password, setPassword] = useState('') 

    const handleSubmit = e =>{
        e.preventDefault()
        console.log("TEST")
        if(email == '' || username == "" || password == ""){
            Swal.fire('Warning', 'Enter all the required fields', 'warning')
        }
        else{
            register(username, email, password)
            .then(data=>{
                if(data.error){
                    Swal.fire('Error', data.error, 'error')
                }
                else{
                    Swal.fire('Congrats', 'User registered successfully', 'success')
                }
            })
        }
    }

    return (
        <>
            <form className='w-1/2 p-5 border my-5 mx-auto rounded-5 shadow-lg'>
                <div className="text-center w-100">
                    <img className="mb-4" src="./bg4.jpg" alt="" width="72" height="57" />
                </div>

                <h1 className="h3 mb-3 fw-normal">Register</h1>

                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInputUsername" placeholder="name@example.com" onChange={e=>setUsername(e.target.value)}/>
                    <label for="floatingInputUsername">Username</label>
                </div>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e=>setEmail(e.target.value)}/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                    <label for="floatingPassword">Password</label>
                </div>

                <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                        I accept the terms and conditions
                    </label>
                </div>
                <button className="btn btn-primary w-100 py-2" type="submit" onClick={handleSubmit}>Register</button>
                <div className="flex justify-between">
                    <span>Already have an account?<Link to='/login'>Sign in</Link></span>
                </div>


                <p className="mt-5 mb-3 text-body-secondary text-center">&copy; 2017–2024</p>
            </form>
        </>
    )
}

export default Register