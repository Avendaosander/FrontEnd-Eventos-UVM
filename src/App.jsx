import './App.css'
import Login from './components/Login/Login'
import { Route, Routes,Navigate } from 'react-router-dom'
import Singup from './components/Register/Register'
import Main from './components/NavLog/NavLog'
import Home from './components/Home/Home'
import Feed from './components/Feed/Feed'

function App() {
  const user = localStorage.getItem("token");
  console.log(user)

  return (
    <div className="App">
      <Main/>
      <Routes>
        <Route path='/feed' element={<Feed/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/reg' element={<Singup/>}/>
      </Routes>
    </div>
  )
}

export default App
