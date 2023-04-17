import './App.css'
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
import Footer from './components/Footer/Footer'
import EditEvento from './components/EditarEvento/FormEvenEdit'

function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">
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
    </div>
  )
}

export default App
