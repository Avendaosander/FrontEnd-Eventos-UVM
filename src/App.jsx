import './App.css'
import UserContext from './context/UserContext'
import { decodeToken } from "react-jwt";
import axios from 'axios';
import Login from './components/Login/Login'
import { Route, Routes,Navigate } from 'react-router-dom'
import Singup from './components/Register/Register'
import Main from './components/NavLog/NavLog'
import Home from './components/Home/Home'
import Feed from './components/Feed/Feed'
import Profile from './components/Profile/Profile'
import Userform from './components/Userform/Userform'
import Evento from './components/Evento/Evento'
import Eventos from './components/Eventos/Eventos'
import FormEvento from './components/FormEvento/FormEvento'
import EditEvento from './components/EditarEvento/FormEvenEdit'
import Favoritos from './components/Favoritos/Favoritos'
import Footer from './components/Footer/Footer'
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <UserContext> */}
        <Main/>
          <Routes>
            <Route path='/' element={<Feed/>}/>
            <Route path='/evenForm' element={<FormEvento/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/eventos' element={<Eventos/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/reg' element={<Singup/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/form' element={<Userform/>}/>
            <Route path='/evento/:id' element={<Evento/>}/>
            <Route path='/edit/:id' element={<EditEvento/>}/>
          </Routes>
        <Footer/>
      {/* </UserContext> */}
    </div>
  )
}

export default App
