import React from 'react'
import Button from '../Button/Button'
import styles from './Header.module.css'

const Header = ({ onClick, showAddedTask }) => {
   return (
      <header className={styles.header}>
         <div className={styles['header-body']}>
            <h1 className={styles.title}>Task Tracker App</h1>
            <Button color={showAddedTask ? "#ff6347" : "#7ac142"} text={showAddedTask ? "Close" : "Add Task"} onClick={onClick} />
         </div>
      </header>
   )
}

export default Header
