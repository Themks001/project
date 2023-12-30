import React, { useState } from "react";
import {Link} from 'react-router-dom'
function Navbar() {
 return (
  <>
   <header>
    <nav id="navbar">
     <ul>
      <li>
       <Link to="/">Home</Link>
      </li>
      <li>
       <Link to="/vitePortfolio/about">About</Link>
      </li>
      <li>
       <Link to="/vitePortfolio/skills">Skills</Link>
      </li>
      <li>
       <Link to="/vitePortfolio/project">Project</Link>
      </li>
      <li>
       <Link to="/vitePortfolio/contact">Contact Us</Link>
      </li>
     </ul>
    </nav>
   </header>
 
  </>
 );
}

export default Navbar;
