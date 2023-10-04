import React, { useState } from 'react'
import { json, useNavigate } from 'react-router-dom';

export const Login = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [isuser, setisUser] = useState(true)
  let navigat = useNavigate();

  const checkUser = () => {
    fetch(`http://localhost:8090/user?email=${email}&password=${password}`)
      .then(res => res.json())
      .then((json) => {
        if (json.length > 0) {
          navigat("/");
        }
        else {
          setisUser(false);
        }
      })
      

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    checkUser();

  }
  return (
    <div>
      <div className='col-md-10 mx-auto' >
        <div className='col-md-7  mx-auto'>
          <div className='box  p-4'>
            <h2 className='formtitle'>Login</h2>
            {isuser ? null : (<div className='alert alert-danger ' role='alert' >No such user found
            </div>)
            }
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
                  <button className='btn btn-danger'>Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
