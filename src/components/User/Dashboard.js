import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "../../App.css";
import { useAuthValue } from '../Auth/AuthContext'

function Dashboard() {
  const {currentUser} = useAuthValue()

  return (
    <div>
      <br/>
      <div className="dashboard__container">
        <h1>Profile</h1>
          <p><strong>Email: </strong>{currentUser?.email}</p>
          <p>
            <strong>Email verified: </strong>
            {`${currentUser?.emailVerified}`}
          </p>
          <span onClick={() => signOut(auth)}>Sign Out</span>
      </div>
    </div>
  );
}

export default Dashboard;