import React from 'react'

const Navbar = () => {
  const openSignUp = () => SignUp.showModal()
  const openLogin = () => Login.showModal()

  const handleSignUp = async () => {
    let username = document.getElementById('Username_S').value
    let email = document.getElementById('Email_S').value
    let password = document.getElementById('Password_S').value
    const res = await fetch('http://localhost:4052/signup',{
             method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                Username: username,
                email: email,
                password: password
            })
        }) 
  }

  const handleLogin = async () => {
    let username = document.getElementById('Username_L').value
    let password = document.getElementById('Password_L').value
    const res = await fetch('http://localhost:4052/login',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                Username: username,
                password: password
            })
        })
        console.log(res.text())
  }
  return (
    <div>
     <span>
      <a href="#" onClick={openSignUp}>Sign-Up</a>
      <a href="#" onClick={openLogin}>Login</a>

      <dialog id='SignUp'>
        <h1>Signup</h1>
        <input type="text" placeholder='Enter Name' id='Username_S'/>
        <input type="text" placeholder='Enter Email' id='Email_S'/>
        <input type="text" placeholder='Enter Password' id='Password_S' />
        <button onClick={()=>handleSignUp()}>Submit</button>
        <button onClick={()=>SignUp.close()}>Close</button>
      </dialog>

        <dialog id='Login'>
        <h1>Login</h1>
        <input type="text" placeholder='Enter Name' id='Username_L' />
        <input type="text" placeholder='Enter Password' id='Password_L'/>
        <button onClick={()=>handleLogin()}>Submit</button>
        <button onClick={()=>Login.close()}>Close</button>
      </dialog>

     </span>
    </div>
  )
}

export default Navbar
