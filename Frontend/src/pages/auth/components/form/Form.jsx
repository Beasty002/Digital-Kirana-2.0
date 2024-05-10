import React from 'react'

const Form = () => {
  return (
    <>
      <div className="container">
        {
            type === 'Register'?
            <h2>User Registration</h2>:
            <h2>Login </h2>

        }
        <form action="#" method="POST">
            <div className="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
    </>
  )
}

export default Form
