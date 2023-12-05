import React from 'react'
import './Auth.css'
function Login() {
    return (
        <div className="auth">
          <form className="authform">
            <h3>Log In</h3>
    
            <div className='inputgroup'>
              <input
                type="text"
                placeholder="Username"
                className="infoinput"
                name="username"
              />
            </div>
    
            <div className='inputgroup'>
              <input
                type="password"
                className="infoinput"
                placeholder="Enter Password"
                name="password"
              />
            </div>
    
            <div>
                <span style={{ fontSize: "12px" }}>
                  Don't have an account Sign up
                </span>
              <button className="btn authbtn">Login</button>
            </div>
          </form>
        </div>
      )
}

export default Login