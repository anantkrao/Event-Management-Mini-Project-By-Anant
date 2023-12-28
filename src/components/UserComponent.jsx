import React from 'react'
import Navbarpannel from '../pages/navbar'
import { useState } from 'react';
import User from './user'
import DisplayUsers from './DisplayUsers';

const UserComponent = () => {
  const [showDisplayUsers, setshowDisplayUsers] = useState(false);

  return (
    <div>
        <Navbarpannel />
        {!showDisplayUsers ? (
        <>
        <User /> 
        <button onClick={() => setshowDisplayUsers(true)}>Display All Events</button>
        </>
      ) : (
       <DisplayUsers />
      )}
    </div>
  )
}

export default UserComponent
