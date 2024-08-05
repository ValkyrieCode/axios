import React from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../api/userAPI'

const Header = () => {
    let { user } = isAuthenticated()

    // let user = isAuthenticated()?.user


    return (
        <>
            <div className="bg-slate-300 flex justify-between">
                <h1 className='text-3xl w-1/4 text-center py-2 cursor-pointer hover:bg-slate-500 hover:text-white'>Nagarjuna</h1>
                <nav className='w-1/2 list-none flex justify-evenly items-center'>
                    <li><Link to={'/'}> Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li>Gallery</li>


                    {
                        user && (
                            user.role == 1 ?
                                <li><Link to={'/admin/dashboard'}>Dashboard</Link></li>
                                :
                                <>
                                    <li><Link to='/profile'>Profile</Link></li>
                                    <li><Link to='/cart'>Cart</Link></li>
                                </>
                        )
                    }

                    {
                        user ?
                            <li>
                                <span>LOGOUT</span>
                            </li>
                            :
                            <>
                                <li><Link to={'/login'}>Login</Link></li>
                                <li><Link to={'/register'}>Register</Link></li>
                            </>
                    }
                </nav>
            </div>
        </>
    )
}

export default Header