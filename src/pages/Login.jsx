import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authenticate, login } from '../api/userAPI'
import Swal from 'sweetalert2'

const Login = () => {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  let navigate = useNavigate()

  const handleSubmit = e =>{
    e.preventDefault()
    login(email, password)
    .then(data=>{
      if(data.error){
        Swal.fire('Error',data.error,'error')
      }
      else{
        authenticate(data)
        if(data.user.role == 1){
          navigate('/admin/dashboard')
        }
        else{
          navigate('/')
        }
      }
    })
  }
  return (
    <form className='w-1/2 p-5 border my-5 mx-auto rounded-5 shadow-lg'>
    <img class="mb-4" src="public\lasagna.jpg" alt="" width="72" height="57"/>
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={e=> setEmail(e.target.value)}/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={e=> setPassword(e.target.value)}/>
      <label for="floatingPassword">Password</label>
    </div>

    <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button class="btn btn-primary w-100 py-2" type="submit" onClick={handleSubmit}>Sign in</button>
    <div className='flex justify-between'>
        <span>Do Not Have An Account?<Link to='/register'>Register</Link></span>
        <Link to="/forgetpassword">Forget Password</Link>
    </div>

    <p class="mt-5 mb-3 text-body-secondary text-center">&copy; 2017–2024</p>
    
  </form>
  )
}

export default Login