import React, { useState } from 'react'
import styles from './Show.module.scss'
export default function Show() {
  let [sf,setSf] = useState(false)
    return (
    <div>
        <button onClick={()=>{setSf(!sf)}} className={styles.show}>Открыть описание сайта</button>
        {sf&&(<div className={styles.work}>
          На этом сайте собранны ссылки на сайты<br></br> или на ресурсы которые всегда будут нужны
        </div>)}
    </div>
    
  )
}
