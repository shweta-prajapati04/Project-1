import React, { useState } from 'react'

export const SignUp = () => {

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [isSuccess, setisSuccess] = useState(false);

  const addUser = (obj) => {
    fetch("http://localhost:8090/user/", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(obj)
    })
      .then((res) => setisSuccess(true))
      .then(() => onSuccess())


  }
  const onSuccess = () => {
    setName("");
    setEmail("");
    setPassword("");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = {
      name: name,
      email: email,
      password: password
    }
    addUser(user);
  }
  return (
    <div>
      <div className='col-md-10 mx-auto' >
        <div className='col-md-7  mx-auto'>

          {isSuccess ? (<div className='alert alert-success ' role='alert' >Account created successfully
            <div className='alert alert-warning mt-3'> To Sign In  
             <a style={{ padding: "5px", textDecoration: "none", fontWeight: "bold" }} href="/login"> Click here</a></div>
          </div>)
            : null

          }
          <div className='box  p-4' style={{ display: isSuccess ? "none" : "block" }} >
            <h2 className='formtitle'>Sign Up</h2>



            <div className='col-md-7 mx-auto'>
              <form onSubmit={handleSubmit}>
                <div className=' mb-3'>
                  <input required type="text" placeholder='Your Name'
                    className='form-control'
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
                <div className=' mb-3'>
                  <input required type="email" placeholder='Email Address'
                    className='form-control'
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <div className=' mb-4'>
                  <input required type="password" placeholder='Your Password'
                    className='form-control'
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
                <div className=' mb-4'>
                  <button className='btn btn-danger'>Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
