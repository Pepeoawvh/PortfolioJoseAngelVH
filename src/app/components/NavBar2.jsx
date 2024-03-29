// 'use client'
// import styles from "./styles/NavBar.module.css"
// import {useEffect, useRef, useState } from "react";
// import Link from "next/link";

// const Navbar2 = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navRef = useRef(null);

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (navRef.current && !navRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("click", handleOutsideClick);

//     return () => {
//       document.removeEventListener("click", handleOutsideClick);
//     };
//   }, []);

//   return (
//     <header className="z-70">
//       <nav ref={navRef}>
//         <Link href="/">
//           {" "}
//           <div className={"logo"}></div>
//         </Link>
//         <ul className={`navItem ${isOpen && "open"}`}>
//           <li>
//             <Link className={"navButton"} href="/">
//               Inicio
//               {/* El componente <Link /> es un componente que nos permite crear enlaces dentro de nuestra aplicación. */}
//             </Link>
//           </li>
//           <li>
//             <Link className={"navButton"} href="/QueSonLosClanes">
//               ¿Qué son los Clanes?
//             </Link>
//             {/* A diferencia de los enlaces <a> de HTML, los enlaces de react-router-dom@6 no recargan la página. */}
//           </li>
//           <li>
//             <Link className={"navButton"} href="/PreguntasFrecuentes">
//               Preguntas Frecuentes
//             </Link>
//             {/* En los Link y NavLink usamos el atributo 'to' para indicar a donde queremos que nos lleve el enlace, en este caso a la ruta '/productos'. */}
//           </li>

//           <li>
//             <Link className={"navButton"} href="/QuienesSomos">
//               Quiénes Somos
//             </Link>
//             {/* En los Link y NavLink usamos el atributo 'to' para indicar a donde queremos que nos lleve el enlace, en este caso a la ruta '/productos'. */}
//           </li>

//         </ul>
//         <div
//           className={`navToggle ${isOpen && "open"}`}
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar2