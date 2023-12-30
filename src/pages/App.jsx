import React, { useState } from "react";
import Navbar from '../component/Navbar.jsx'
import {Routes, Route} from 'react-router-dom'
import Home from './Home.jsx'
function App() {
 return (
  <>
   <Navbar/>
   <Routes>
   <Route path='/vitePortfolio/home' element={<Home></Home>}>
   </Route>
   </Routes>
  </>
 );
}

export default App;
