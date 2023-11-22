import React, { useEffect, useState } from "react"
import './App.css';

function App() {
  const [email, setEmail] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [emailError, setEmailError] = useState('email cannot be empty')
  const [formValid, setFormValid] = useState(false)
  const [values, setValues] = useState(false)

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    if (emailError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError])

  function emailHandler(e) {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError('incorrect email')
    } else {
      setEmailError('')
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break;
    }
  }

  return (
      <div className="register">
        <form action="#">
          <h1>Registration</h1>
          <div className="block">
            {(emailDirty && emailError) && <div style={{color: 'red', marginBottom: '4px'}}>{emailError}</div>}
            <input
                   onBlur={(e) => blurHandler(e)}
                   onChange={(e) => emailHandler(e)}
                   name="email" type="email" placeholder="Enter your @email...">
            </input>
          </div>
          <div className="block">
            <input
                   onChange={(e) => setName(e.target.value)}
                   name="name" type="name" placeholder="Enter your name...">
            </input>
          </div>
          <div className="block">
            <input
                   onChange={(e) => setSurname(e.target.value)}
                   name="surname" type="surname" placeholder="Enter your surname...">
            </input>
          </div>
          <div className="block">
            <input
                   onChange={(e) => setPhone(e.target.value)}
                   name="phone" type="phone" placeholder="+996 (999) 99-99-99">
            </input>
          </div>

          <button className="btn" disabled={!formValid} type="submit" onClick={() => setValues(!values)}>
            Registration
          </button>
        </form>
        <div className="check">
          <h2>RESULT</h2>
          <div className="check__inner">
            <span>Your Email:</span>
            {email}
          </div>
          <div className="check__inner">
            <span>Your Name:</span>
            {name}
          </div>
          <div className="check__inner">
            <span>Your Surname:</span>
            {surname}
          </div>
          <div className="check__inner">
            <span>Your Phone:</span>
            {phone}
          </div>
        </div>
      </div>
  )
}

export default App;
