import React , {useState} from 'react'
import RegisterForm from '../components/RegisterForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const [user, setUser] = useState({userName:"",email:"",password:"", confirmPassword:""})
    const navigate = useNavigate()
    const register = (e, newUser)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', newUser, {withCredentials:true})
        .then(serverResponse=> {
            console.log(serverResponse)
            navigate('/')
        })
        .catch(error=>console.log(error))
        
        // setUser({userName:"",email:"",password:"", confirmPassword:""})

    }
  return (
    <div>
        <RegisterForm user={user} setter={setUser} operation={register} test={"test"}/>
    </div>
  )
}

export default Register