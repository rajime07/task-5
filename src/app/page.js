"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRef, useState } from "react";
import './app.css';

export default function Home() {
  const num1ref=useRef(null);
  const num2ref=useRef(null);

  const [res, setRes] = useState(0);
  const handleClick = () => {
    const num1=parseFloat(num1ref.current.value)|| 0;
    const num2=parseFloat(num2ref.current.value)|| 0;
    setRes(num1+num2);
  }

  return (
    <div className={styles.page}>
      <h1>Sum Of Two Numbers</h1>
      <div className="inp">
      <input type="number" ref={num1ref} placeholder="Enter First Value" className="txt-box"></input>
      <input type="number" ref={num2ref} placeholder="Enter Second Value" className="txt-box"></input>
      </div>
      <button onClick={handleClick} className="btn">Click here</button>
      <h2>Result is {res}</h2>
    </div>
  );
}
