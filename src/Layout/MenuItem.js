import React from "react";
import { Link } from "react-router-dom";

function MenuItem(props) {
  const handleClick = (e) => props.onClick();
  return (
    <li className={props.isActive ? "active" : ""}>
      <Link to={props.item.path} hash="/#" onClick={handleClick}>
        {props.item.name}
      </Link>
    </li>
  );
}
export default MenuItem;
