import React, { useEffect, useState } from "react"
import "../../App.css";
import { useAuthValue } from '../config/AuthContext'
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth' 
import { auth } from '../config/firebase'

function Dashboard() {
  const { currentUser } = useAuthValue()
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/auth-error");
  }, [user, loading]);
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