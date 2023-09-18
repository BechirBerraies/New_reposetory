import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [user, setUser] = useState({email:"",password:""})
    const navigate = useNavigate()
    const login = (e, loginUser) => {
        e.preventDefault()
        console.log("login user");
        console.log(loginUser);
        axios.post('http://localhost:8000/api/login',loginUser, {withCredentials:true})
        .then(serverResponse => {
            console.log(serverResponse)
            navigate('/')
        })
        .catch(error=>console.log(error))
    }

  
  return (
    <div>
        <LoginForm user={user} setter={setUser} operation={login}/>
    </div>
  )
}

export default Login