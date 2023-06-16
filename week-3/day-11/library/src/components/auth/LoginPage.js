import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

export default function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function onFormSubmit(e) {
        e.preventDefault();

        try {
            const user = signInWithEmailAndPassword(auth, email, password);
            console.log(user);
            navigate('/')
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className="container my-5">
            <div className="card card-body">
                <h1>Login</h1>
                <p>Please enter your email and password to login</p>

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
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
