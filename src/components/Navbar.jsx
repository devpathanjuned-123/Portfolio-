// import React, { useState } from 'react'
// import '../Style/Navbar.css'
// import { Link } from "react-router-dom";
// const Navbar = () => {
//     const [Open, setOpen] = useState(false);
//     return (
//         <nav className='navbar'>
//             <div className='logo'>
//                 Juned dev
//             </div>

//             <ul className={Open ? "navlink active" : "navlink"}>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>

//                 <li>
//                     <Link to='about'>About</Link>
//                 </li>
//                 <li>
//                     <Link to='portfolio'>Projects</Link>
//                 </li>
//                 <li>
//                     <Link to='contact'>Contact</Link>
//                 </li>
//             </ul>

//             <div className='menu-icon'
//                 onClick={() => setOpen(!Open)}
//             >
//                 ☰
//             </div>
//         </nav>
//     )
// }

// export default Navbar


import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="logo">
        Juned<span>.dev</span>
      </div>

      <ul className={open ? "nav-links active" : "nav-links"}>

        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>

        <li>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </li>

        <li>
          <Link to="/portfolio" onClick={closeMenu}>Projects</Link>
        </li>

        <li>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </li>

      </ul>

      <div
        className="menu-icon"
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>

    </nav>
  );
};

export default Navbar;