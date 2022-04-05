import React, { useEffect, useState } from "react"
import "../../App.css";
import { useAuthValue } from '../Auth/AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from '../Auth/firebase'

function Dashboard() {
  const {currentUser} = useAuthValue()

  return (
    <div className="page-container">
        <div className="dashboard__container">
          <h1>Profile</h1>
            <p><strong>Email: </strong>{currentUser?.email}</p>
            <button onClick={() => signOut(auth)}>Sign Out</button>
      </div>
    </div>
  );
}

export default Dashboard;