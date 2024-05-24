import React from 'react'

const Register = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "10px", color:"white" }}>
      <h1>Register</h1>
      <form>
        <div className='username-form'>
          <label htmlFor="display-name">DisplayName: </label>
          <input type="text" id='display-name' />
        </div>
        <div className='email-form'>
          <label htmlFor="email">Email: </label>
          <input type="email" id='email' />
        </div>
        <div className='password-form'>
          <label htmlFor="password">Password: </label>
          <input type="password" id='password' />
        </div>
        <button className='btn-register'>Registrar</button>
      </form>
    </div>
  )
}

export default Register