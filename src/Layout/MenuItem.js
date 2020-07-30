import React from "react";

function MenuItem(props) {
  const handleClick = (e) => props.onClick();
  return (
    <li className={props.isActive ? "active" : ""}>
      {props.onClick ? (
        <a href={props.item.path} onClick={handleClick}>
          {props.item.name}
        </a>
      ) : (
        <a href={props.item.path}>{props.item.name}</a>
      )}
    </li>
  );
}
export default MenuItem;
