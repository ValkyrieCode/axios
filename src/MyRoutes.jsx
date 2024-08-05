import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import First from './practice/First'
import Second from './practice/Second'
import Layout from './Layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Login from './pages/Login'
import Register from './pages/Register'
import Counter from './pages/Counter'
import CounterComponent from './pages/CounterComponent.jsx'
import Main from './pages/Main.jsx'
import Person from './component/Person.jsx'
import DataFetch from './pages/DataFetch.jsx'
import AxiosExample from './pages/AxiosExample.jsx'
import MyCounter from './Redux/MyCounter.jsx'
import GameReducer from './Redux/GameReducer.jsx'
import Games from './Redux/Games.jsx'
import VerifyUser from './pages/VerifyUser.jsx'

const MyRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/second' element={<Second/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

        <Route path='/verifyEmail/:token' element={<VerifyUser/>}/>
        
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/countercomponent' element={<CounterComponent/>}/>
        <Route path='/person' element={<Person/>}/>
        <Route path='/data' element={<DataFetch/>}/>
        <Route path='/axios' element={<AxiosExample/>}/>
        <Route path='/reduxcounter' element={<MyCounter/>}/>
        <Route path='/games' element={<Games/>}/>
        <Route path='/gamereducer' element={<GameReducer/>}/>

        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes