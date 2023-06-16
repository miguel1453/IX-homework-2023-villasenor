import React from 'react'

import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';

export default function Profile(props) {
  const navigate = useNavigate()
  async function onLogoutClicked() {
    navigate('/login')
    await signOut(auth);

  }
  return (
    <div className='container'> 
      <table className='table'>
        <thead>
        </thead>
        <tbody>
          <tr>
            <td>Email</td>
            <td>{props.user.email}</td>
          </tr>
          <tr>        <button className='btn btn-danger' onClick={onLogoutClicked}>Logout</button>
</tr>
        </tbody>
      </table>
       
    </div>
  )
}
