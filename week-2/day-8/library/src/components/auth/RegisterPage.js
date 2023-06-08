import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase'


export default function RegisterPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function onFormSubmit(e) {
        e.preventDefault();

        try {
            const userCard = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCard);
            navigate('/');
        } catch(err) {
            alert(err.message);
        }
    }

    return (
        <div className="container my-5">
          <div className="card card-body">
            <h1>Register</h1>
            <p>Please enter your email and password to register</p>
    
            <form onSubmit={onFormSubmit}>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  placeholder="Email"
                ></input>
              </div>
    
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  placeholder="Password"
                ></input>
              </div>
    
              <div className="d-flex justify-content-end mt-4">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      );
}
