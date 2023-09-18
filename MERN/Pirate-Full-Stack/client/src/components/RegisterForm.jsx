import React from 'react'
import { Link } from 'react-router-dom'

const RegisterForm = ({user, setter, operation}) => {
    console.log(user, setter, operation);
    // console.log('++++', props);
  return (
    <div>
        <h1>Register Form</h1>
        <h1>Form</h1>
            <form onSubmit={(e)=>operation(e,user)}>
                <div className="form-group mb-3">
                    <label htmlFor="">Username</label>
                    <input type="text" className="form-control"
                        onChange={(e) => setter({ ...user, userName: e.target.value })}
                        value={user.userName}
                    />
                    {/* {errors.title && <span className='text-danger h5'> {errors.title}</span>} */}
                </div>
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
                <div className="form-group mb-3">
                    <label htmlFor="">Confirm Password</label>
                    <input type="text" className="form-control"
                        onChange={(e) => setter({ ...user, confirmPassword: e.target.value })}
                        value={user.confirmPassword}
                    />
                    {/* {errors.title && <span className='text-danger h5'> {errors.title}</span>} */}
                </div>               
                <div className='text-center'>
                    <button className='btn btn-outline-primary w-50'>Register</button>
                </div>
                <div className="text-center mt-3">
                    <Link to={'/login'}>already have an account ? Login</Link>
                </div>
            </form>
    </div>
  )
}

export default RegisterForm