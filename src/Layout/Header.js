import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Menu from "../Menu";
import MenuItem from "./MenuItem";

class Header extends Component {
  routeActive(paths) {
    paths = Array.isArray(paths) ? paths : [paths];
    console.log(paths);
    console.log(this.props.location.pathname);
    return paths.some((p) => this.props.location.hash.indexOf(p) > -1);
  }
  render() {
    return (
      <header
        id="header"
        className="fixed-top  d-flex justify-content-center align-items-center"
      >
        <nav className="nav-menu d-none d-lg-block">
          <ul>
            {Menu.map((item, i) => {
              return (
                <MenuItem
                  isActive={this.routeActive(item.path)}
                  item={item}
                  key={i}
                  onClick={() => {}}
                />
              );
            })}
          </ul>
        </nav>
      </header>
    );
  }
}
export default withRouter(Header);
