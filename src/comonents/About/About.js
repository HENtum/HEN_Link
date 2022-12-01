import React from 'react'
import Show from '../AboutMe/Show'
import styles from './About.module.scss'
export default function About() {
  return (
    <div>
      <div><Show/></div>
      <div className={styles.show}>Все права защищенны 2022</div>
    </div>
  )
}
