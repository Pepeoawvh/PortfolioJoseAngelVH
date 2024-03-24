"use client"
import Link from "next/link";
import Image from "next/image";
import styles from "./styles/wsp.module.css";
import WspIcon from "../../../public/wspicon.svg"
const WspButton = () => {
  return (
    <div>
         <button className={`${styles.wsp}`} >
      <Link href="https://wa.me/+56949866129"><Image src={WspIcon} alt="WhatsApp Icon"/></Link>
    </button>
    </div>
  )
}

export default WspButton