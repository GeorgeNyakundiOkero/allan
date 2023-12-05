import React from 'react'
import './Auth.css'

function Signup() {
    return (
        <div className="auth">
          <form className="authform">
            <h3>Sign Up</h3>
    
            <div className='inputgroup'>
              <input
                type="text"
                placeholder="First Name"
                className="infoinput"
                name="fname"
              />
            </div>

            <div className='inputgroup'>
              <input
                type="text"
                placeholder="Last Name"
                className="infoinput"
                name="lname"
              />
            </div>

            <div className='inputgroup'>
              <input
                type="email"
                placeholder="Email"
                className="infoinput"
                name="email"
              />
            </div>

            <div className='inputgroup'>
              <input
                type="text"
                placeholder="Home Address"
                className="infoinput"
                name="address"
              />
            </div>
    
            <div className='inputgroup'>
              <input
                type="password"
                className="infoinput"
                placeholder="Password"
                name="password"
              />
            </div>

            <div className='inputgroup'>
              <input
                type="password"
                className="infoinput"
                placeholder="Confirm Password"
                name="password2"
              />
            </div>
    
            <div>
                <span style={{ fontSize: "12px" }}>
                  Have an account Sign up
                </span>
              <button className="btn authbtn">Signup</button>
            </div>
          </form>
        </div>
      )
}

export default Signup