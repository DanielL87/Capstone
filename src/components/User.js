import React from 'react';
import Image from "../assets/images/user.png"
import '../App.css'

function User(){
  return (
    <div>
      <img src={Image} className='userImage' height="150" width="150" alt='' />
      <h3>User Name:</h3>
    </div>
  );
}

export default User;