import React from 'react'
import { useState } from 'react'
import styles from './Flex.module.scss'

export default function Flex() {
  let [rul,setRul] = useState(false)
  let [visible,setVisible] = useState('')
  let arr = [{
    id:1,
    link: <a onMouseEnter={()=>{setVisible('Отслеживает Vatsim')}} className={styles.link1} href='https://simaware.ca/' target="_blank" rel="noopener noreferrer">Simaware</a>
  },
{
    id: 2,
    link: <a onMouseEnter={()=>{setVisible('Радио')}} className={styles.link2} href='https://www.radiorecord.ru/' target="_blank" rel="noopener noreferrer">Radio Record</a>
},
{
    id:3,
    link: <a onMouseEnter={()=>{setVisible('Метрострой и троллейбус')}}className={styles.link3} href='https://fsproject.ru/' target="_blank" rel="noopener noreferrer">Fs.Project</a>
},
{
    id:4,
    link: <a onMouseEnter={()=>{setVisible('Сделать план полета')}}className={styles.link4} href='https://www.simbrief.com/home/' target="_blank" rel="noopener noreferrer">SimBrief</a>
},
{
  id:5,
  link: <a onMouseEnter={()=>{setVisible('Чарты')}}className={styles.link5} href='https://vk.com/im?sel=-178803952' target="_blank" rel="noopener noreferrer">FlightHelperBot</a>
},
{
  id:6,
  link: <a onMouseEnter={()=>{setVisible('Для ВАК')}}className={styles.link6} href='https://www.fsairlines.net/en/hom' target="_blank" rel="noopener noreferrer">FsAirlines</a>
},
{
  id:7,
  link: <a onMouseEnter={()=>{setVisible('RTS')}}className={styles.link7} href='https://madadev.ru/' target="_blank" rel="noopener noreferrer">Madadev</a>
},
{
  id:8,
  link: <a onMouseEnter={()=>{setVisible('Хостинг')}}className={styles.link8} href='https://beget.com/' target="_blank" rel="noopener noreferrer">Beget</a>
},
{
  id:9,
  link: <a onMouseEnter={()=>{setVisible('Погодник')}}className={styles.link9} href='http://t908300x.beget.tech/' target="_blank" rel="noopener noreferrer">HENweath</a>
},
{
  id:10,
  link: <a onMouseEnter={()=>{setVisible('Создание дизайна')}}className={styles.link10} href='https://www.figma.com' target="_blank" rel="noopener noreferrer">Figma</a>
},
{
  id:11,
  link: <a onMouseEnter={()=>{setVisible('Смотреть видосы')}}className={styles.link11} href='https://www.youtube.com/' target="_blank" rel="noopener noreferrer">YouTube</a>
},
{
  id:12,
  link: <a onMouseEnter={()=>{setVisible('Переводчик')}}className={styles.link12} href='https://translate.yandex.ru/' target="_blank" rel="noopener noreferrer">Translator</a>
},
{
  id:13,
  link: <a onMouseEnter={()=>{setVisible('Если нажать то начнется скачивание антивируса!')}}className={styles.link13} href='https://free.drweb.ru/download+cureit/gr/' target="_blank" rel="noopener noreferrer">DW Cureit</a>
}
]
    const res = arr.map((el)=>{
        return(
        <div key={el.id}>{el.link}</div>
    )})
    return (
    <div>
      <div onMouseLeave={()=>{setRul(false)}} onMouseEnter={()=>{setRul(true)}} className={styles.flex}>{res}</div>
      {rul&&(<div className={styles.content}>{visible}</div>)}
    </div>
  )
}
