"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles/wsp.module.css";
import WspIcon from "../../../public/wspicon.svg";

const WspButton = () => {
  return (
    <Link
      href="https://wa.me/+56949866129"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp (se abre en nueva pestaña)"
      className={`animate-fade animate-delay-300 ${styles.wsp}`}
    >
      {/* Ícono decorativo — el aria-label del Link describe la acción */}
      <Image src={WspIcon} alt="" width={50} height={50} aria-hidden="true" />
    </Link>
  );
};

export default WspButton;
