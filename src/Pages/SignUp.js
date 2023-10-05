import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { funSignUp } from '../redux/Action';

export const SignUp = () => {

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  //let [isSuccess, setisSuccess] = useState(false);
  let dispatch=useDispatch();
  let isSignUp = useSelector((data) => data.isSignUp)



  const addUser = (obj) => {
    fetch("http://localhost:8090/user/", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(obj)
    })
      .then((res) => dispatch(funSignUp()))
      .then(() => onSuccess())
     // setisSuccess(isSignUp);

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

          {isSignUp ? (<div className='alert alert-success ' role='alert' >Account created successfully
            <div className='alert alert-warning mt-3'> To Sign In  
             <a style={{ padding: "5px", textDecoration: "none", fontWeight: "bold" }} href="/login"> Click here</a></div>
          </div>)
            : null

          }
          <div className='box  p-4' style={{ display: isSignUp ? "none" : "block" }} >
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
