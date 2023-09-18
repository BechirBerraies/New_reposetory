import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllPirates from './components/AllPirates'
import {Routes,Route} from 'react-router-dom'
import ViewPirates from './components/ViewPirates'
import AddPirate from './components/AddPirate'
import Register from './views/Register'
import Login from './views/login'

function App() {

  return (
    <>
    <Routes>
    <Route path='/'element={ <AllPirates/> }/> 
    <Route path='/pirate/:id' element={<ViewPirates/>} />
    <Route path='/pirate/new' element={<AddPirate/>}/>
    <Route path ='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    
    



    </Routes>
    </>
  )
}

export default App
