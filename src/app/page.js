'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [first, setfirst] = useState('abdullah')
  const alert=()=>{
    setfirst('hamid')
  }

  const Iside=()=>{
    return(
      <h1>inside</h1>
    )
  }
  return (
    <main className={styles.main}>
    <h1>heloo {first}</h1>
    <Second name={'jeloo'}/>
  <button onClick={alert}>on click</button>
  <Iside/>
  {Iside()}
    </main>
  );
}


const Second = (props) =>{
  return(
    <h1>heloo world {props.name}</h1>
    
  )
}