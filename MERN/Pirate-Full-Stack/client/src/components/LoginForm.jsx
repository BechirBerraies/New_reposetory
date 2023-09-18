import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = ({user, setter, operation}) => {
return (
    <div>
        <h1>Login Form</h1>
            <form onSubmit={(e)=>operation(e,user)}>
                
                <div className="form-group mb-3">
                    <label htmlFor="">Email</label>
                    <input type="text" className="form-control"
                        onChange={(e) => setter({ ...user, email: e.target.value })}
                        value={user.email}
                    />
                    {/* {errors.title && <span className='text-danger h5'> {errors.title}</span>} */}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="">Password</label>
                    <input type="text" className="form-control"
                        onChange={(e) => setter({ ...user, password: e.target.value })}
                        value={user.password}
                    />
                    {/* {errors.title && <span className='text-danger h5'> {errors.title}</span>} */}
                </div>
                            
                <div className='text-center'>
                    <button className='btn btn-outline-primary w-50'>Login</button>
                </div>
                <div className="text-center mt-3">
                    <Link to={'/register'}>Dont have an account ? Register</Link>
                </div>
            </form>
    </div>
  )
}

export default LoginForm