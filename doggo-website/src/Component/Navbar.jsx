import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../puppy.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <p><Link to={'/'}>Home</Link></p>
      <p><Link to={'/login'}>Login</Link></p>
    </div>
  )
}

export default Navbar