import React from 'react'
import styles from './Header.module.scss'
import {Routes,Route,Link} from 'react-router-dom'
import About from '../About/About'
import Off from '../Off/Off'

export default function Header() {
  return (
    <div>
      <header>
        <div className={styles.name}>Сайт с ссылками на нужные сайты</div>
        <div className={styles.link}>
        <Link className={styles.link1} to="/">На главную</Link><br></br>
        <Link className={styles.link2} to="/about">О сайте</Link>
        <div><Off /></div>
        </div>
        <Routes>
        <Route path="/about" element={<About />}/>
        </Routes>
       </header>
    </div>
  )
}
