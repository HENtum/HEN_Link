import React, { useState } from 'react'
import './Off.module.scss'
import styles from './Off.module.scss'

export default function Off() {
  let [off,setOff] = useState(false)
return (
    <div>
        <div><button className={styles.bt1} onClick={()=>{setOff(!off)}}>{off ? <div onClick={()=>{ window.location.reload()}}>Включить светлую тему</div> : <div>Включить темную тему</div>}</button></div>
       {off&&(document.body.style.background = 'black')}
    </div>
  )
}
