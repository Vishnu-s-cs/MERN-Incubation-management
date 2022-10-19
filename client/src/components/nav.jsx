import React from 'react'
import styles from "./styles.module.css";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
function NAV() {
  const [user, setUser] = useState({});

useEffect(() => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
   setUser(user);
  }
}, [localStorage.getItem('userToken')]);
	const handleLogout = () => {
		localStorage.removeItem("userToken");
		localStorage.removeItem("user");
		window.location.replace('/');
	};
  return (
    <div className={styles.main_container}>
    <nav className={styles.navbar}>
      <h1>Incubation</h1>
      
      <h1 style={{"marginLeft":"auto","paddingRight":"1rem"}}>Welcome, {user.name}</h1>
      <button className={styles.white_btn} onClick={handleLogout} style={{'marginTop':"2rem","zIndex":"5000"}}>
        Logout
      </button>
    </nav>
  </div>
  )
}

export default NAV