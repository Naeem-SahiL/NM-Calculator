import React, { useState } from "react";
import "./Sidebar.css";
import {Link, BrowserRouter} from 'react-router-dom'

function Sidebar() {
  const [normal, setnormal] = useState('+');
  const [active, setActive] = useState(0);
  const [subMenuOpen, setsubMenuOpen] = useState('');

  const openSubMenu = () =>{
    normal === '+' ? setnormal('-'): setnormal('+')
    subMenuOpen === '' ? setsubMenuOpen('openSubmenu'): setsubMenuOpen('')
  }
  return (
    <div className="sidebar_body">
      <div className="menu_item">
        <div className="mainMenu">
          <div className={`name ${active == 0 ? 'active':''}`}><Link className="sidebarLink" to="/" onClick={()=>{setActive(0)}}>Bisection</Link></div>
          <div className={`name ${active == 1 ? 'active':''}`}><Link className="sidebarLink" to="/regulafalsi" onClick={()=>{setActive(1)}}>Regula Falsi</Link></div>
          <div className={`name ${active == 2 ? 'active':''}`}><Link className="sidebarLink" to="/secant" onClick={()=>{setActive(2)}}>Secant</Link></div>
          <div className={`name ${active == 3 ? 'active':''}`}><Link className="sidebarLink" to="/newtonraphson" onClick={()=>{setActive(3)}}>Newton Raphson</Link></div>
          <div className={`name ${active == 4 ? 'active':''}`}><Link className="sidebarLink" to="/jacobi" onClick={()=>{setActive(4)}}>Jacobi Iteration</Link></div>
          <div className={`name ${active == 5 ? 'active':''}`}><Link className="sidebarLink" to="/guassseidel" onClick={()=>{setActive(5)}}>Guass Seidel</Link></div>
          <div className={`name ${active == 6 ? 'active':''}`}><Link className="sidebarLink" to="/picard" onClick={()=>{setActive(6)}}>Picard</Link></div>
          <div className={`name ${active == 7 ? 'active':''}`}><Link className="sidebarLink" to="/newtonforward" onClick={()=>{setActive(7)}}>Newton Forward</Link></div>
          <div className={`name ${active == 13 ? 'active':''}`}><Link className="sidebarLink" to="/newtonbackward" onClick={()=>{setActive(13)}}>Newton Backward</Link></div>
          <div className={`name ${active == 8 ? 'active':''}`}><Link className="sidebarLink" to="/stirling" onClick={()=>{setActive(8)}}>Stirling</Link></div>
          <div className={`name ${active == 9 ? 'active':''}`}><Link className="sidebarLink" to="/lagrange" onClick={()=>{setActive(9)}}>Lagrange</Link></div>
          <div className={`name ${active == 10 ? 'active':''}`}><Link className="sidebarLink" to="/bessel" onClick={()=>{setActive(10)}}>Bessel</Link></div>
          <div className={`name ${active == 11 ? 'active':''}`}><Link className="sidebarLink" to="/guassforward" onClick={()=>{setActive(11)}}>Guass Forward</Link></div>
          <div className={`name ${active == 12 ? 'active':''}`}><Link className="sidebarLink" to="/guassbackward" onClick={()=>{setActive(12)}}>Guass BAckward</Link></div>
          <div className={`name ${active == 14 ? 'active':''}`}><Link className="sidebarLink" to="/rangekutta2nd" onClick={()=>{setActive(14)}}>Range Kutta 2nd Order</Link></div>
          <div className={`name ${active == 15 ? 'active':''}`}><Link className="sidebarLink" to="/weedle" onClick={()=>{setActive(15)}}>Weedle's Rule</Link></div>
          <div className={`name ${active == 16 ? 'active':''}`}><Link className="sidebarLink" to="/simpson1by3" onClick={()=>{setActive(16)}}>Simpson 1/3</Link></div>
          <div className={`name ${active == 17 ? 'active':''}`}><Link className="sidebarLink" to="/simpson3by8" onClick={()=>{setActive(17)}}>Simpson 3/8</Link></div>
          
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
