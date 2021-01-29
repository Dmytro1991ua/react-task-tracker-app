import React from 'react'
import styles from './Footer.module.css'
import { Link } from "react-router-dom";

const Footer = () => {
   return (
     <footer className={styles.footer}>
         <p className={styles.copyright}>Copyright &copy; 2021</p>
         <Link className={styles.link} to="/about">About</Link>
     </footer>
   );
}

export default Footer
