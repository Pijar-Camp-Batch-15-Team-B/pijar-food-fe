import React from 'react'

import '../style/Login.css'

export default function Login() {
  return (
    <section id='Login'>
      <div className="container">
        <div className="left">
            <div className="left2">
                <div className="lb">
                    <img src="/images/barbecue-1.png" alt="logos" className="limg"/>
                    <p className="lt">Mama Recipe.</p>
                </div>
            </div>
        </div>
        <div className="right">
            <div className="rb">
                <h1 className="rb1a">WELCOME</h1>
                <h3 className="rb1">Log in into your exiting account</h3>
                <h3>E-mail</h3>
                <input type="email" placeholder="E-mail" className="rb-i1"/>
                <h3>Password</h3>
                <input type="password" placeholder="Password" className="rb-i"/>
                <div className="rb2">
                    <input type="checkbox" className="rb2a"></input>
                    <div className="rb2b">I agree to terms & conditions</div>
                </div>
                <button className="rb-btn">Log in</button>
                <p className="rb3">Forgot Password ?</p>    
                <p className="rb4">Don’t have an account? <span className="rb4a">Sign Up</span></p>           
            </div>
        </div>
    </div>
    </section>
  )
}
