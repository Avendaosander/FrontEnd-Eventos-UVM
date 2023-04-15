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

function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">
      <Main/>
      <Routes>
        <Route path='/feed' element={<Feed/>}/>
        <Route path='/evenForm' element={<FormEvento/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/eventos' element={<Eventos/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/reg' element={<Singup/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>
        <Route path='/form/:id' element={<Userform/>}/>
        <Route path='/evento/:id' element={<Evento/>}/>
      </Routes>
    </div>
  )
}

export default App
