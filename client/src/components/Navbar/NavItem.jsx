import React from "react";

function NavItem({ path, text }) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={path}>
        {text}
      </a>
    </li>
  );
}

export default NavItem;
