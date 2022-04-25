import React, { useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  const [normal, setnormal] = useState('+');
  const [subMenuOpen, setsubMenuOpen] = useState('');

  const openSubMenu = () =>{
    normal === '+' ? setnormal('-'): setnormal('+')
    subMenuOpen === '' ? setsubMenuOpen('openSubmenu'): setsubMenuOpen('')
  }
  return (
    <div className="sidebar_body">
      <div className="menu_item">
        <div className="mainMenu">
          <div className="plus"><h4 >{normal}</h4></div>
          <div className="name"><a className="sidebarLink" onClick={openSubMenu}>Link1</a></div>
        </div>
        <div className={`subMenu ${subMenuOpen}`}>
          <button className="sidebarLink">SubLink1</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
