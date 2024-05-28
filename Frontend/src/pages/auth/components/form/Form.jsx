/* eslint-disable react/prop-types */
import { useState } from 'react'

const Form = ({ type,onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(formData)
  }
  const google = () =>{
    window.open("http://localhost:3000/auth/login/google","_self")
  }
  return (
    <>
      <div className="container">
        {
          type === 'Register' ?
            <h2>User Registration</h2> :
            <h2>Login </h2>

        }
        <form onSubmit={handleSubmit}>
          {
            type === 'Register' && (
              <div className="form-group">
                <label htmlFor="name">Userame:</label>
                <input type="text" id="name" name="username" onChange={handleChange} required />
                <button onClick={google}>Google</button>
              </div>
            )
          }

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" onChange={handleChange} required />
          </div>
          {type === 'Register' ?
          <button type="submit">Register</button> :
          <button type="submit">Login</button>
        }
        </form>
      </div>
    </>
  )
}

export default Form
